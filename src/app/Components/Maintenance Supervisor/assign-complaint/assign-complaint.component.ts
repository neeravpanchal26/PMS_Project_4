import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {AssignComplaintService, IAssignComplaint, IEmailComplaint} from './assign-complaint.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';
import {Observable, of} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {IAddComplaint} from '../../Tenant/report-complaint/report-complaint.service';
import {BusinessSettingsService} from '../../It Admin/business-settings/business-settings.service';

@Component({
    selector: 'app-assign-complaint',
    templateUrl: './assign-complaint.component.html',
    styleUrls: ['./assign-complaint.component.scss']
})
export class AssignComplaintComponent implements OnInit {
    // Global variable
    public suppliers = [];
    public supplierName = 'Please select a supplier.';
    public supplierEmail: any;
    public complaints: Observable<any>;
    public complaintsImages = [];
    public assignComplaints = [];
    public supplierForm: FormGroup;
    public selection = new SelectionModel<any>(true, []);
    public businessInfo = [];
    public display: boolean = false;

    // Pagination stuff
    public dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    // Default constructor
    constructor(private service: AssignComplaintService,
                private IService: ImageRetrieveService,
                private formBuilder: FormBuilder,
                private changeDetectorRef: ChangeDetectorRef,
                private BService: BusinessSettingsService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildSupplierForm();

        // Supplier load up
        this.service.GetSupplier()
            .subscribe(next => {
                    this.suppliers = next;
                },
                error => this.snackBar.handleError(error));

        // Complaints load up
        this.service.GetComplaints()
            .subscribe(next => {
                    // Paginator
                    this.changeDetectorRef.detectChanges();
                    this.dataSource = new MatTableDataSource<any>(next);
                    this.dataSource.paginator = this.paginator;
                    this.complaints = this.dataSource.connect();

                    if (next != null) {
                        this.display = true;
                    }

                    // Complaint image load up
                    const compID = next.map((value, index) => Number(value.ComplaintID));

                    const minID = compID.reduce((a, b) => Math.min(a, b));
                    const maxID = compID.reduce((a, b) => Math.max(a, b));

                    for (let counter = maxID; counter >= minID; counter--) {
                        this.service.GetComplaintImages(counter)
                            .then(data => this.complaintsImages.push(this.IService.selectPhoto(data)),
                                error => this.snackBar.handleError(error));
                    }
                },
                error => this.snackBar.handleError(error));

        // Business Load up
        this.BService.GetBusinessInfo()
            .subscribe(data => this.businessInfo = data[0], error => this.snackBar.handleError(error));
    }


    // Select event
    SupplierSelect(e) {
        this.supplierName = e.source.selected.viewValue;
    }

    // Set supplier email
    SetSupplierEmail(email) {
        this.supplierEmail = email;
    }

    checkBoxTest(e) {
        if (e.valid) {
            for (let i = 0; i < this.selection.selected.length; i++) {
                const param: IAssignComplaint = {
                    compID: this.selection.selected[i].ComplaintID,
                    suppID: e.value.supplier
                };
                this.service.AssignComplaint(param)
                    .subscribe(data => {
                        if (data[0].TRUE === 1 && i === 0) {
                            this.snackBar.AssignComplaintSuccess();
                        }
                    }, error => this.snackBar.handleError(error));
            }
            const eParam: IEmailComplaint = {
                suppEmail: this.supplierEmail,
                complaints: this.selection.selected,
                businessInfo: this.businessInfo
            };

            this.service.EmailComplaint(eParam)
                .subscribe(data => {
                    if (data === true) {
                        this.snackBar.AssignComplaintEmailSucess();
                    }
                }, error => this.snackBar.handleError(error));
        }
    }

    // Form Builder
    buildSupplierForm() {
        this.supplierForm = this.formBuilder.group(
            {
                supplier: ['', Validators.required]
            }
        );
    }
}
