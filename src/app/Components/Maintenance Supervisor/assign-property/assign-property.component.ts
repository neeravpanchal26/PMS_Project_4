import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {AssignPropertyService, IAssignProperty} from './assign-property.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {DatePipe, Location} from '@angular/common';

@Component({
    selector: 'app-assign-property',
    templateUrl: './assign-property.component.html',
    styleUrls: ['./assign-property.component.css'],
    providers: [DatePipe]
})
export class AssignPropertyComponent implements OnInit {
    // Global variable
    imageObject: Array<Images> = [];
    public assignPropertyForm: FormGroup;
    public property: any;
    public tenant: any;
    public apiUrl = environment.api;
    public minID;

    // Default constructor
    constructor(private IService: ImageRetrieveService,
                private service: AssignPropertyService,
                private formBuilder: FormBuilder,
                private snackBar: SnackbarNotificationService,
                private datePipe: DatePipe,
                public location: Location) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // Property load up
        this.service.GetProperty()
            .subscribe(data => {
                    this.property = data;
                },
                error => this.snackBar.handleError(error));

        // Tenant load up
        this.service.GetTenant()
            .subscribe(data => this.tenant = data,
                error => this.snackBar.handleError(error));

        // Blank image load up
        this.SetBlankImage();
    }

    // Property image load up
    ImageLoadUp(propertyID) {
        this.imageObject = [];
        this.service.GetPropertyImageID(propertyID)
            .then(
                data => {
                    this.minID = data[0].minID;
                    if (data[0].minID != null) {
                        for (let counter = data[0].minID; counter <= data[0].maxID; counter++) {
                            this.service.GetPropertyImages(counter)
                                .then(
                                    data1 => {
                                        if (data1.size !== 0) {
                                            const img = new Images();
                                            const reader = new FileReader();
                                            reader.readAsDataURL(data1);
                                            reader.onloadend = (readerEvt: any) => {
                                                img.image = this.IService.selectPhoto2(readerEvt.target.result);
                                                img.title = counter;
                                                this.imageObject.push(img);
                                            };
                                        } else {
                                            this.SetBlankImage();
                                        }
                                    },
                                    error1 => this.snackBar.handleError(error1)
                                );
                        }
                    } else if (data[0].minID === null) {
                        this.SetBlankImage();
                    }
                }
            );
    }

    // Set blank image
    SetBlankImage() {
        const blankImage = new Images();
        blankImage.image = this.apiUrl + '/api/Assets/blank350x150.png';
        blankImage.title = 'Error image';
        this.imageObject.push(blankImage);
    }

    // Assign property
    AssignProperty(e) {
        if (e.valid) {
            // Assign property info
            const param: IAssignProperty = {
                propertyID: e.value.property,
                tenantID: e.value.tenant,
                startDate: this.datePipe.transform(e.value.startDate, 'yyyy-MM-dd'),
                endDate: this.datePipe.transform(e.value.endDate, 'yyyy-MM-dd')
            };
            this.service.AssignProperty(param)
                .subscribe(
                    data => {
                        if (data[0] === true) {
                            this.snackBar.AssignPropertySuccess();
                            e.reset();
                        }
                    },
                    error => this.snackBar.handleError(error)
                );
        } else if (e.invalid) {
            this.snackBar.formFailure();
        }
    }

    // Form Builder
    buildForm(): void {
        this.assignPropertyForm = this.formBuilder.group({
            property: ['', Validators.required],
            tenant: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }
}

// Wrapper class for images
export class Images {
    image: any;
    title: any;
}
