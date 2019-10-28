import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SnackbarNotificationService} from '../../../../Global Services/snackbar-notification.service';
import {AssignPropertyService} from '../../assign-property/assign-property.service';
import {BusinessSettingsService} from '../../../It Admin/business-settings/business-settings.service';
import {ExcelExporterService} from '../../../../Global Services/excel-exporter.service';
import {ImageRetrieveService} from '../../../../Global Services/image-retrieve.service';
import {ReportComplaintService} from '../../../Tenant/report-complaint/report-complaint.service';
import {AddPropertyService} from '../../add-property/add-property.service';
import {MaintenanceReportsService} from '../maintenance-reports.service';
import {Images} from '../../assign-property/assign-property.component';
import {AssignComplaintService} from '../../assign-complaint/assign-complaint.service';

@Component({
    selector: 'app-complaint-history-report',
    templateUrl: './complaint-history-report.component.html',
    styleUrls: ['./complaint-history-report.component.css']
})
export class ComplaintHistoryReportComponent implements OnInit {
    // Global variables
    public properties;
    public complaints;
    public categories;
    public subCategories;
    public suppliers;
    public complaintStatus;

    // Sorting variables
    public property = '';
    public complaint = '';
    public category = '';
    public subCategory = '';
    public supplier = '';
    public status = '';
    public startDate = '';
    public endDate = new Date(new Date().setDate(new Date().getDate() + 1));

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['Date', 'Desc'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private snackBar: SnackbarNotificationService,
                private AService: AssignPropertyService,
                private BService: BusinessSettingsService,
                private EService: ExcelExporterService,
                private IService: ImageRetrieveService,
                private RService: ReportComplaintService,
                private APService: AddPropertyService,
                private ACService: AssignComplaintService,
                private MService: MaintenanceReportsService) {
    }

    // Form load
    ngOnInit() {
        // Property Load up
        this.AService.GetProperty()
            .subscribe(data => this.properties = data, error => this.snackBar.handleError(error));

        // Category
        this.RService.GetCategory()
            .subscribe(data => this.categories = data, error => this.snackBar.handleError(error));

        // Complaint Status
        this.MService.GetComplaintStatus()
            .subscribe(data => this.complaintStatus = data, error => this.snackBar.handleError(error));

        // Supplier Load up
        this.ACService.GetSupplier()
            .subscribe(data => this.suppliers = data, error => this.snackBar.handleError(error));

        this.GetComplaintHistory();
    }

// Sub Category load up
    SubCategory(catID) {
        this.RService.GetSubCategory(catID)
            .subscribe(data => this.subCategories = data, error => this.snackBar.handleError(error));
    }

    // Complaint Load up by property
    ComplaintByProperty(propID) {
        this.MService.GetComplaintByProperty(propID)
            .subscribe(data => this.complaints = data, error => this.snackBar.handleError(error));
    }

    // Filter Complaint History
    FilterComplaintHistory(propName, complaint, cat, subCat, supplier, statusName, startDate, endDate) {
        if (propName != null) {
            this.property = propName.source.selected.viewValue;
        } else if (complaint != null) {
            this.complaint = complaint.source.selected.viewValue;
        } else if (cat != null) {
            this.category = cat.source.selected.viewValue;
        } else if (subCat != null) {
            this.subCategory = subCat;
        } else if (supplier != null) {
            this.supplier = supplier.source.selected.viewValue;
        } else if (statusName != null) {
            this.status = statusName;
        } else if (startDate != null) {
            this.startDate = startDate;
        } else if (endDate != null) {
            this.endDate = endDate;
        }

        this.GetComplaintHistory();
    }

    // Complaint Load up
    GetComplaintHistory() {
        this.MService.GetComplaintHistory(this.property, this.complaint, this.subCategory, this.category, this.supplier, this.status, this.startDate, this.endDate)
            .subscribe(data => {
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, error => this.snackBar.handleError(error));
    }

    ExportToExcel(DataToExport) {
        // Headers
        const headers = ['Complaint Date', 'Complaint Date'];

        // Sub Headers
        let subHeader = '';
        if (this.property !== '') {
            subHeader += 'Property: ' + this.property + '\r\n';
        }
        if (this.complaint !== '') {
            subHeader += 'Tenant: ' + this.complaint + '\r\n';
        }
        if (this.subCategory !== '') {
            subHeader += 'Sub Category: ' + this.subCategory + '\r\n';
        }
        if (this.category !== '') {
            subHeader += 'Category: ' + this.category + '\r\n';
        }
        if (this.supplier !== '') {
            subHeader += 'Owner: ' + this.supplier + '\r\n';
        }
        if (this.status !== '') {
            subHeader += 'Complaint Status: ' + this.status + '\r\n';
        }
        if (this.startDate !== '') {
            subHeader += 'Between: ' + this.startDate + ' & ' + this.endDate;
        }

        // Converting to array
        const DataArray = [];
        DataToExport.forEach((x) => {
            DataArray.push({
                'Complaint Date': x.Date,
                'Complaint Desc': x.Desc
            });
        });

        // Business Data
        this.BService.GetBusinessInfo()
            .subscribe(data => {
                const image = [];
                this.IService.GetBusinessLogo().subscribe(next => {
                    const img = new Images();
                    const reader = new FileReader();
                    reader.readAsDataURL(next);
                    reader.onloadend = (readerEvt: any) => {
                        img.image = readerEvt.target.result;
                        img.title = 'BusinessLogo';
                        image.push(img);
                        this.EService.ExportToExcel(data, 'Complaint History Report', headers, DataArray, image, subHeader);
                    };
                });
            });
    }
}
