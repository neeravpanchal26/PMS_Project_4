import {Component, OnInit} from '@angular/core';

// Custom imports
import {CreateUserService, IAddUser} from '../../It Admin/create-user/create-user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isNumber} from 'util';
import {DatePipe} from '@angular/common';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {CreateTenantService} from './create-tenant.service';

@Component({
    selector: 'app-create-tenant',
    templateUrl: './create-tenant.component.html',
    styleUrls: ['./create-tenant.component.css'],
    providers: [DatePipe]
})
export class CreateTenantComponent implements OnInit {
    // Global Variables
    public createTenantForm: FormGroup;
    public maxDate: Date;
    public emailCheck = false;
    public phoneCheck = false;

    // Default constructor
    constructor(private formBuilder: FormBuilder,
                private datePipe: DatePipe,
                private snackBar: SnackbarNotificationService,
                private service: CreateTenantService) {
    }

    // Form Load
    ngOnInit() {
        // Max Date of birth
        const date = new Date();
        this.maxDate = new Date((date.getFullYear() - 18), date.getMonth(), date.getDate());

        // Form Validation
        this.buildForm();
    }

    // Create user
    createUser(e) {
        if (isNumber(e.value.contact === false)) {
            this.createTenantForm.controls.contact.setErrors({incorrect: true});
        } else {
            if (e.valid) {
                const param: IAddUser = {
                    firstName: e.value.name,
                    lastName: e.value.surname,
                    dob: this.datePipe.transform(e.value.dob, 'yyyy-MM-dd'),
                    contactNumber: e.value.contact,
                    email: e.value.email.toLowerCase(),
                    password: e.value.password,
                    userType: null,
                    address1: null,
                    address2: null,
                    suburb: null
                };
                this.service.CreateTenant(param)
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
                this.snackBar.formFailure();
            }
        }
    }

    // Form Builder
    buildForm(): void {
        const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.createTenantForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            surname: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            dob: ['', Validators.compose([Validators.required])],
            contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern), Validators.maxLength(100)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
        });
    }
}
