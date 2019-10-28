import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {AddPropertyService, IAddProperty} from './add-property.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
    // Global variable
    public ownerForm: FormGroup;
    public generalForm: FormGroup;
    public addPropertyForm: FormGroup;
    public img = '';
    public cities: any;
    public suburbs: any;
    public owners: any;
    public status: any;
    public PropType: any;

    // Native Html Elements
    @ViewChild('PropPhoto', {static: false}) PropPhoto;

    // Default constructor
    constructor(private service: AddPropertyService,
                private snackBar: SnackbarNotificationService,
                private formBuilder: FormBuilder,
                private CService: CreateUserService,
                public location: Location) {
    }

    // Form load
    ngOnInit() {
        // Form validation
        this.buildForm();

        // City load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // PropType load up
        this.service.getTypes()
            .subscribe(
                data => this.PropType = data,
                error => this.snackBar.handleError(error)
            );

        // Owner load up
        this.service.getOwner()
            .subscribe(
                data => this.owners = data,
                error => this.snackBar.handleError(error)
            );

        // Status load up
        this.service.getStatus()
            .subscribe(
                data => this.status = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Add property
    addProperty(e) {
        if (e.valid) {
            const param: IAddProperty = {
                Name: this.generalForm.controls.name.value,
                Address1: this.generalForm.controls.address1.value,
                Address2: this.generalForm.controls.address2.value,
                Suburb: this.generalForm.controls.suburb.value,
                YearBuilt: e.value.year,
                Type: e.value.type,
                Owner: this.ownerForm.controls.owner.value,
                Bedrooms: e.value.bedroom,
                Bathrooms: e.value.bathroom,
                Size: e.value.size,
                Status: e.value.status
            };
            this.service.AddProperty(param)
                .subscribe(
                    data => {
                        const r = data[0];
                        if (r.TRUE === 1) {
                            this.snackBar.AddPropertySuccess(param.Name);

                            // Image upload
                            try {
                                // File validation
                                const images = this.PropPhoto.nativeElement;
                                const allowedImages = ['image/jpeg', 'image/png'];
                                for (const i of images.files) {
                                    if (allowedImages.indexOf(i.type) > -1) {
                                        // Logo upload
                                        const frmData = new FormData();
                                        frmData.append('file', i);
                                        this.service.uploadImage(frmData)
                                            .subscribe(data1 => {
                                                }
                                            );
                                    }
                                }
                            } catch {
                            }
                            e.reset();
                        }
                    },
                    error => this.snackBar.handleError(error));


        } else if (e.invalid) {
            this.snackBar.formFailure();
        }
    }

    // Suburb Load up
    suburbLoad(cityID) {
        this.CService.GetSuburb(cityID)
            .subscribe(
                data => {
                    this.suburbs = data;
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Form builder
    buildForm(): void {
        this.ownerForm = this.formBuilder.group({
            owner: ['', Validators.required]
        });

        this.generalForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address1: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address2: ['', Validators.compose([Validators.maxLength(45)])],
            city: ['', Validators.required],
            suburb: ['', Validators.required],
        });


        this.addPropertyForm = this.formBuilder.group({
            type: ['', Validators.required],
            bedroom: ['', Validators.compose([Validators.required, Validators.min(1)])],
            bathroom: ['', Validators.compose([Validators.required, Validators.min(1)])],
            size: ['', Validators.required],
            year: ['', Validators.required],
            status: ['', Validators.required]
        });
    }
}
