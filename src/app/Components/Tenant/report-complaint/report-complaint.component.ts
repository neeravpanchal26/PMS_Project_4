import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {IAddComplaint, ReportComplaintService} from './report-complaint.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../Global Services/login.service';

@Component({
    selector: 'app-report-complaint',
    templateUrl: './report-complaint.component.html',
    styleUrls: ['./report-complaint.component.css']
})
export class ReportComplaintComponent implements OnInit {
    // Global variable
    public categoryForm: FormGroup;
    public subCategoryForm: FormGroup;
    public reportComplaintForm: FormGroup;
    public category;
    public categoryImages = [];
    public subCategory;
    public subImages = [];
    public tenantID;
    public img = '';
    public categoryName = 'Please select a category.';
    public subName = 'Please select a sub category.';

    // Native Html Elements
    @ViewChild('CompPhoto', {static: false}) compPhoto;

    // Default constructor
    constructor(private service: ReportComplaintService,
                private IService: ImageRetrieveService,
                private formBuilder: FormBuilder,
                private LService: LoginService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // Tenant ID load up
        this.tenantID = this.LService.GetUserID();

        // Category load up
        this.service.GetCategory()
            .subscribe(next => this.category = next,
                error => this.snackBar.handleError(error));

        // Category image load up
        for (let counter = 1; counter <= 6; counter++) {
            this.service.GetCategoryImage(counter)
                .then(data => {
                        this.categoryImages.push(this.IService.selectPhoto(data));
                    },
                    error1 => this.snackBar.handleError(error1));
        }
    }

    // Sub Category load up
    SubCategory(catID, catName) {
        this.categoryForm.controls.cat.setValue(catID);
        this.categoryName = catName;
        this.subImages = [];
        this.service.GetSubCategory(catID)
            .subscribe(next => {
                    this.subCategory = next;
                    // Sub Category image load up
                    for (let counter = this.subCategory[0].SubID; counter <= this.subCategory[this.subCategory.length - 1].SubID; counter++) {
                        this.service.GetSubImage(counter)
                            .then(data => this.subImages.push(this.IService.selectPhoto(data)),
                                error2 => this.snackBar.handleError(error2));
                    }

                },
                error3 => this.snackBar.handleError(error3));
    }

    // Set Sub Category
    SetSubCategory(subID, subName) {
        this.subName = subName;
        this.subCategoryForm.controls.subCat.setValue(subID);
    }

    // Report Complaint
    ReportComplaint(e) {
        if (e.valid) {
            const param: IAddComplaint = {
                tenantID: this.tenantID,
                desc: e.value.description,
                subCat: this.subCategoryForm.controls.subCat.value
            };
            this.service.AddComplaint(param)
                .subscribe(data => {
                    if (data[0].TRUE === 1) {
                        this.snackBar.ReportComplaintSuccess();

                        // Image upload
                        try {
                            // File validation
                            const image = this.compPhoto.nativeElement;
                            const imageFile = image.files[0];
                            const allowedImages = ['image/jpeg', 'image/png'];
                            if (allowedImages.indexOf(imageFile.type) > -1) {
                                // Logo upload
                                const frmData = new FormData();
                                frmData.append('file', imageFile);
                                this.service.UploadImage(frmData)
                                    .subscribe(data1 => {
                                        e.reset();
                                    });
                            }
                        } catch {
                        }
                    }
                }, error => this.snackBar.handleError(error));
        }
    }

    // Form Builder
    buildForm(): void {
        this.reportComplaintForm = this.formBuilder.group({
            description: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
            photo: ['']
        });

        this.subCategoryForm = this.formBuilder.group({
            subCat: ['', Validators.required]
        });

        this.categoryForm = this.formBuilder.group({
            cat: ['', Validators.required]
        });
    }
}
