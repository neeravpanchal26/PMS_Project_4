import {Component, OnInit} from '@angular/core';

// Custom imports
import {IProperty, UpdatePropertyService} from './update-property.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {AddPropertyService} from '../add-property/add-property.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {UpdatePersonalInfoService} from '../../Default/update-personal-info/update-personal-info.service';

@Component({
    selector: 'app-update-property',
    templateUrl: './update-property.component.html',
    styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {
    // Global variable
    public updatePropertyForm: FormGroup;
    public cities: any;
    public suburbs: any;
    public owners: any;
    public status: any;
    public PropType: any;
    public propertyID: any;
    public property: any;

    constructor(private service: UpdatePropertyService,
                private formBuilder: FormBuilder,
                private CService: CreateUserService,
                private snackBar: SnackbarNotificationService,
                private AService: AddPropertyService,
                public location: Location,
                private route: ActivatedRoute,
                private UService: UpdatePersonalInfoService) {
    }

    ngOnInit() {
        // Form validation
        this.buildForm();

        // Set property ID
        this.propertyID = this.route.snapshot.paramMap.get('propertyID');

        // Get property info
        this.service.GetPropertyInfo(this.propertyID)
            .subscribe(
                data => {
                    this.property = data[0];
                    // Load values onto form
                    this.updatePropertyForm.controls.name.setValue(this.property.Name);
                    this.updatePropertyForm.controls.owner.setValue(this.property.OwnerID);
                    this.updatePropertyForm.controls.address1.setValue(this.property.Address1);
                    this.updatePropertyForm.controls.address2.setValue(this.property.Address2);
                    this.updatePropertyForm.controls.suburb.setValue(this.property.Suburb);
                    this.updatePropertyForm.controls.status.setValue(this.property.Status);
                    this.updatePropertyForm.controls.type.setValue(this.property.Type);
                    this.updatePropertyForm.controls.bedroom.setValue(this.property.Bedrooms);
                    this.updatePropertyForm.controls.bathroom.setValue(this.property.Bathrooms);
                    this.updatePropertyForm.controls.size.setValue(this.property.Size);
                    this.updatePropertyForm.controls.year.setValue(this.property.YearBuilt);
                    this.updatePropertyForm.controls.city.setValue(this.property.CityID);
                    // Suburb Load up
                    this.suburbLoad(this.property.CityID);
                },
                error => this.snackBar.handleError(error)
            );

        // City load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // PropType load up
        this.AService.getTypes()
            .subscribe(
                data => this.PropType = data,
                error => this.snackBar.handleError(error)
            );

        // Owner load up
        this.AService.getOwner()
            .subscribe(
                data => this.owners = data,
                error => this.snackBar.handleError(error)
            );

        // Status load up
        this.AService.getStatus()
            .subscribe(
                data => this.status = data,
                error => this.snackBar.handleError(error)
            );
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

    // Update property
    updateProperty(e) {
        if (e.valid) {
            const param: IProperty = {
                PropertyID: this.propertyID,
                Name: e.value.name,
                Address1: e.value.address1,
                Address2: e.value.address2,
                Suburb: e.value.suburb,
                YearBuilt: e.value.year,
                Type: e.value.type,
                Owner: e.value.owner,
                Bedrooms: e.value.bedroom,
                Bathrooms: e.value.bathroom,
                Size: e.value.size,
                Status: e.value.status
            };
            this.service.UpdateProperty(param)
                .subscribe(
                    data => {
                        if (data[0].TRUE === 1) {
                            this.snackBar.UpdatePropertySuccess(e.value.name);
                        }
                    },
                    error => this.snackBar.handleError(error)
                );
        }
    }

    // Form builder
    buildForm(): void {
        this.updatePropertyForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address1: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address2: ['', Validators.compose([Validators.maxLength(45)])],
            city: ['', Validators.required],
            suburb: ['', Validators.required],
            type: ['', Validators.required],
            owner: ['', Validators.required],
            bedroom: ['', Validators.compose([Validators.required, Validators.min(1)])],
            bathroom: ['', Validators.compose([Validators.required, Validators.min(1)])],
            size: ['', Validators.required],
            year: ['', Validators.required],
            status: ['', Validators.required]
        });
    }
}
