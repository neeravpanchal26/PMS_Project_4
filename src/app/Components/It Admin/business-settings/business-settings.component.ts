import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CreateUserService} from '../create-user/create-user.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {BusinessSettingsService, IBusiness} from './business-settings.service';
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {environment} from '../../../../environments/environment';
import {Location} from '@angular/common';

@Component({
    selector: 'app-business-settings',
    templateUrl: './business-settings.component.html',
    styleUrls: ['./business-settings.component.css']
})
export class BusinessSettingsComponent implements OnInit {
    // Global variables
    public businessForm: FormGroup;
    public cities: any;
    public businessLogo: any;
    public apiUrl = environment.api;
    public img = 'Logo upload';

    // Native Html Elements
    @ViewChild('BusinessLogo', {static: false}) newBusinessLogo;

    // Default Constructor
    constructor(private formBuilder: FormBuilder,
                private CService: CreateUserService,
                private snackBar: SnackbarNotificationService,
                private service: BusinessSettingsService,
                private IService: ImageRetrieveService,
                public location: Location) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // Load Logo
        this.logo();

        // City Load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // Business info load up
        this.service.GetBusinessInfo()
            .subscribe(
                data => {
                    // Load up form
                    this.businessForm.controls.name.setValue(data[0].BusinessName);
                    this.businessForm.controls.contact.setValue(data[0].BusinessContact);
                    this.businessForm.controls.website.setValue(data[0].BusinessWebsite);
                    this.businessForm.controls.vat.setValue(data[0].BusinessVat);
                    this.businessForm.controls.city.setValue(data[0].BusinessCity);
                },
                error => this.snackBar.handleError(error)
            );
    }

    // logo
    logo() {
        this.IService.GetBusinessLogo()
            .subscribe(
                data => {
                    this.businessLogo = this.IService.selectPhoto(data);
                    if (data.size === 0) {
                        this.businessLogo = this.apiUrl + '/api/Assets/blank350x150.png';
                    }
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Business info update
    onSubmit(e) {
        if (e.valid) {
            try {
                // File validation
                const image = this.newBusinessLogo.nativeElement;
                const logoFile = image.files[0];
                const allowedImages = ['image/jpeg', 'image/png'];
                if (allowedImages.indexOf(logoFile.type) > -1) {
                    // Logo upload
                    const frmData = new FormData();
                    frmData.append('file', logoFile);
                    this.service.UploadBusinessLogo(frmData)
                        .subscribe(data => {
                            this.logo();
                        });
                }
            } catch {
            }

            // Business Information Update
            const param: IBusiness = {
                name: e.value.name,
                website: e.value.website,
                contact: e.value.contact,
                vat: e.value.vat,
                cityID: e.value.city
            };
            this.service.BusinessSettingsUpdate(param)
                .subscribe(
                    data => {
                        if (data === true) {
                            this.snackBar.BusinessSettingUpdate();
                        }
                    },
                    error => this.snackBar.handleError(error));
        } else if (e.invalid) {
            this.snackBar.formFailure();
        }
    }

    // Form Builder
    buildForm(): void {
        this.businessForm = this.formBuilder.group({
            logo: [''],
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            website: ['', Validators.compose([Validators.maxLength(200)])],
            vat: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            city: ['', Validators.required],
        });
    }
}


