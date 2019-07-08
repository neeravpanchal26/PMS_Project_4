import {Component, OnInit} from '@angular/core';

// Custom imports
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {CreateOwnerService, IAddOwner} from './create-owner.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {FormBuilder, FormGroup, Validators, Form} from '@angular/forms';
import {isNumber} from 'util';

@Component({
    selector: 'app-create-owner',
    templateUrl: './create-owner.component.html',
    styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {
    // Global variable
    public createOwnerForm: FormGroup;
    public cities: any;
    public suburbs: any;
    public emailCheck = false;
    public phoneCheck = false;

    // Default constructor
    constructor(private CService: CreateUserService,
                private service: CreateOwnerService,
                private snackBar: SnackbarNotificationService,
                private formBuilder: FormBuilder) {
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
    }

    // Create owner
    createOwner(e) {
        if (isNumber(e.value.contact === false)) {
            this.createOwnerForm.controls.contact.setErrors({incorrect: true});
        } else {
            if (e.valid) {
                const param: IAddOwner = {
                    firstName: e.value.name,
                    lastName: e.value.surname,
                    contactNumber: e.value.contact,
                    email: e.value.email.toLowerCase(),
                    address1: e.value.address1,
                    address2: e.value.address2,
                    suburb: e.value.suburb
                };
                this.service.CreateOwner(param)
                    .subscribe(
                        data => {
                            const r = data[0];
                            if (r.TRUE === 1) {
                                this.snackBar.CreateOwnerSuccess(param.firstName, param.lastName);
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

    // Suburb load up
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
        this.createOwnerForm = this.formBuilder.group({
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
