import {Component, OnInit} from '@angular/core';

// Custom imports
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {ActivatedRoute} from '@angular/router';
import {IOwner, UpdateOwnerInfoService} from './update-owner-info.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {UpdatePersonalInfoService} from '../../Default/update-personal-info/update-personal-info.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
    selector: 'app-update-owner-info',
    templateUrl: './update-owner-info.component.html',
    styleUrls: ['./update-owner-info.component.css']
})
export class UpdateOwnerInfoComponent implements OnInit {
    // Global variable
    public updateOwnerForm: FormGroup;
    public cities: any;
    public suburbs: any;
    public ownerID: any;
    public owner: any;
    public emailCheck = false;
    public phoneCheck = false;

    // Default constructor
    constructor(private CService: CreateUserService,
                private UService: UpdatePersonalInfoService,
                private route: ActivatedRoute,
                private service: UpdateOwnerInfoService,
                private snackBar: SnackbarNotificationService,
                private formBuilder: FormBuilder,
                public location: Location) {
    }

    // Form load
    ngOnInit() {
        // Form validation
        this.buildForm();

        // Set owner ID
        this.ownerID = this.route.snapshot.paramMap.get('ownerID');

        // Get owner info
        this.service.GetOwnerInfo(this.ownerID)
            .subscribe(
                data => {
                    this.owner = data[0];
                    // Load values onto form
                    this.updateOwnerForm.controls.name.setValue(this.owner.Firstname);
                    this.updateOwnerForm.controls.surname.setValue(this.owner.Lastname);
                    this.updateOwnerForm.controls.contact.setValue(this.owner.ContactNumber);
                    this.updateOwnerForm.controls.address1.setValue(this.owner.Address1);
                    this.updateOwnerForm.controls.address2.setValue(this.owner.Address2);
                    this.updateOwnerForm.controls.email.setValue(this.owner.Email);
                    this.updateOwnerForm.controls.city.setValue(this.owner.CityID);
                    this.updateOwnerForm.controls.suburb.setValue(this.owner.Suburb);
                },
                error => this.snackBar.handleError(error)
            );

        // City Load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // Suburb Load up
        this.UService.GetAllSuburbs()
            .subscribe(
                data => this.suburbs = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Update owner
    updateOwner(e) {
        if (e.valid) {
            const param: IOwner = {
                ownerID: this.ownerID,
                firstName: e.value.name,
                lastName: e.value.surname,
                contactNumber: e.value.contact,
                email: e.value.email,
                address1: e.value.address1,
                address2: e.value.address2,
                suburb: e.value.suburb
            };
            this.service.UpdateOwner(param)
                .subscribe(
                    data => {
                        if (data === true) {
                            this.snackBar.UpdateOwnerSuccess(param.firstName, param.lastName);
                        }
                    },
                    error => this.snackBar.handleError(error)
                );
        } else if (e.invalid) {
            this.snackBar.formFailure();
        }

    }

    // Suburb Load up
    suburbLoad(cityID) {
        this.CService.GetSuburb(cityID)
            .subscribe(
                data => this.suburbs = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Form builder
    buildForm(): void {
        const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.updateOwnerForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            surname: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            address1: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address2: ['', Validators.compose([Validators.maxLength(45)])],
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern), Validators.maxLength(100)])],
            city: ['', Validators.required],
            suburb: ['', Validators.required]
        });
    }
}
