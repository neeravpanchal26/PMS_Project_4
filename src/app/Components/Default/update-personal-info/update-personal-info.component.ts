import {Component, OnInit} from '@angular/core';

// Custom imports
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UpdatePersonalInfoService, IUpdateUserInfo} from './update-personal-info.service';
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {LoginService} from '../../../Global Services/login.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-update-personal-info',
    templateUrl: './update-personal-info.component.html',
    styleUrls: ['./update-personal-info.component.css']
})
export class UpdatePersonalInfoComponent implements OnInit {
    // Global variable
    public settingForm: FormGroup;
    public user: any;
    public maxDate: any;
    public cities: any;
    public suburbs: any;

    // Default constructor
    constructor(private formBuilder: FormBuilder,
                private service: UpdatePersonalInfoService,
                private CService: CreateUserService,
                private LService: LoginService,
                private snackBar: SnackbarNotificationService,
                public location: Location) {
    }

    // Form load
    ngOnInit() {
        // Max Date of birth
        const date = new Date();
        this.maxDate = new Date((date.getFullYear() - 18), date.getMonth(), date.getDate());

        // Form Validation
        this.buildForm();

        // User load up
        this.service.GetSpecificUser(this.LService.GetUserID())
            .subscribe(
                data => {
                    this.user = data[0];
                    // Load values onto form
                    this.settingForm.controls.name.setValue(this.user.FirstName);
                    this.settingForm.controls.surname.setValue(this.user.Surname);
                    this.settingForm.controls.dob.setValue(this.user.Dob);
                    this.settingForm.controls.contact.setValue(this.user.ContactNumber);
                    this.settingForm.controls.email.setValue(this.user.Email);
                    this.settingForm.controls.address1.setValue(this.user.Address1);
                    this.settingForm.controls.address2.setValue(this.user.Address2);
                    this.settingForm.controls.city.setValue(this.user.CityID);
                    this.settingForm.controls.suburb.setValue(this.user.Suburb);
                },
                error => this.snackBar.handleError(error));

        // City Load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // Suburb Load up
        this.service.GetAllSuburbs()
            .subscribe(
                data => this.suburbs = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Update user info Method
    updateUserInfo(e) {
        if (e.valid) {
            const param: IUpdateUserInfo = {
                userID: this.LService.GetUserID(),
                firstName: e.value.name,
                lastName: e.value.surname,
                dob: e.value.dob,
                contactNumber: e.value.contact,
                email: e.value.email,
                address1: e.value.address1,
                address2: e.value.address2,
                suburb: e.value.suburb
            };
            this.service.UpdatePersonalInfo(param)
                .subscribe(
                    data => {
                        if (data === true) {
                            this.snackBar.UpdatePersonalInfoSuccess(param.firstName + ' ' + param.lastName);
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
                data => this.suburbs = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Form Builder
    buildForm(): void {
        const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.settingForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            surname: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            dob: ['', Validators.compose([Validators.required])],
            contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern), Validators.maxLength(100)])],
            address1: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address2: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            city: ['', Validators.required],
            suburb: ['', Validators.required]
        });
    }
}
