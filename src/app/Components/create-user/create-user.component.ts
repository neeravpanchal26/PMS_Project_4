import {Component, OnInit} from '@angular/core';

// Custom imports
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import {CreateUserService} from './create-user.service';
import {MatSlideToggleChange} from '@angular/material';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
import {SnackbarNotificationService} from '../../Global Services/snackbar-notification.service';
import {isNumber} from 'util';
import {IAddUser} from './create-user.service';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css'],
    providers: [DatePipe]
})
export class CreateUserComponent implements OnInit {
    // Global Variables
    public createUserForm: FormGroup;
    public maxDate: Date;
    public userType: any;
    public cities: any;
    public suburbs: any;
    public emailCheck = false;
    public phoneCheck = false;

    // Default Constructor
    constructor(private service: CreateUserService,
                private formBuilder: FormBuilder,
                private snackBar: SnackbarNotificationService,
                private datePipe: DatePipe) {
    }

    // Form Load
    ngOnInit() {
        // Max Date of birth
        const date = new Date();
        this.maxDate = new Date((date.getFullYear() - 18), date.getMonth(), date.getDate());

        // Form Validation
        this.buildForm();

        // User type load up
        this.service.GetUserType()
            .subscribe(
                data => this.userType = data,
                error => this.snackBar.handleError(error)
            );

        // City load up
        this.service.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Create user
    createUser(e) {
        if (isNumber(e.value.contact === false)) {
            this.createUserForm.controls.contact.setErrors({incorrect: true});
        } else {
            if (e.valid) {
                const param: IAddUser = {
                    firstName: e.value.name,
                    lastName: e.value.surname,
                    dob: this.datePipe.transform(e.value.dob, 'yyyy-MM-dd'),
                    contactNumber: e.value.contact,
                    email: e.value.email.toLowerCase(),
                    password: e.value.password,
                    userType: e.value.type,
                    address1: e.value.address1,
                    address2: e.value.address2,
                    suburb: e.value.suburb
                };
                this.service.CreateUser(param)
                    .subscribe(
                        data => {
                            const r = data[0];
                            if (r.TRUE === 1) {
                                this.snackBar.CreateUserSuccess(param.firstName, param.lastName);
                                e.reset();
                            }
                            if (r.emailExists === 1) {
                                this.emailCheck = true;
                            } else if (r.phoneExists === 1) {
                                this.phoneCheck = true;
                            } else if (r.bothExists === 1) {
                                this.phoneCheck = true;
                                this.emailCheck = true;
                            }
                        },
                        error => this.snackBar.handleError(error));
            } else if (e.invalid) {
                this.markFormGroupTouched(e);
                this.snackBar.formFailure();
            }
        }
    }

    // Mark As Touched
    private markFormGroupTouched(formGroup: FormGroup) {
        (Object as any).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    // Suburb Load up
    suburbLoad(cityID) {
        this.service.GetSuburb(cityID)
            .subscribe(
                data => {
                    this.suburbs = data;
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Form Builder
    buildForm(): void {
        const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.createUserForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            surname: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            dob: ['', Validators.compose([Validators.required])],
            contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern), Validators.maxLength(100)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
            type: ['', Validators.required],
            address1: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address2: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            city: ['', Validators.required],
            suburb: ['', Validators.required]
        });
    }
}
