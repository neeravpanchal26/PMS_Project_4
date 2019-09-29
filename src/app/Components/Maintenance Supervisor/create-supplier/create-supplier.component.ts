import {Component, OnInit} from '@angular/core';

// Custom imports
import {CreateSupplierService, IAddSupplier} from './create-supplier.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-create-supplier',
    templateUrl: './create-supplier.component.html',
    styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
    // Global variable
    public createSupplierForm: FormGroup;
    public cities: any;
    public suburbs: any;
    public type: any;

    // Default constructor
    constructor(private service: CreateSupplierService,
                private CService: CreateUserService,
                private snackBar: SnackbarNotificationService,
                private formBuilder: FormBuilder) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // City load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // Property type load up
        this.service.GetType()
            .subscribe(
                data => this.type = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Create Supplier
    CreateSupplier(e) {
        if (e.valid) {
            const param: IAddSupplier = {
                name: e.value.name,
                type: e.value.type,
                contactNumber: e.value.contact,
                email: e.value.email.toLowerCase(),
                address1: e.value.address1,
                address2: e.value.address2,
                suburb: e.value.suburb
            };
            this.service.CreateSupplier(param)
                .subscribe(
                    data => {
                        const r = data[0];
                        if (r.TRUE === 1) {
                            this.snackBar.CreateSupplierSuccess(param.name);
                            e.reset();
                        }
                    },
                    error => this.snackBar.handleError(error));
        } else if (e.invalid) {
            this.snackBar.formFailure();
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
        this.createSupplierForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern), Validators.maxLength(100)])],
            contact: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            type: ['', Validators.required],
            address1: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
            address2: ['', Validators.compose([Validators.maxLength(45)])],
            city: ['', Validators.required],
            suburb: ['', Validators.required]
        });
    }
}
