import {Component, OnInit} from '@angular/core';

// Custom imports
import {ISupplier, UpdateSupplierInfoService} from './update-supplier-info.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CreateUserService} from '../../It Admin/create-user/create-user.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {Location} from '@angular/common';
import {CreateSupplierService} from '../create-supplier/create-supplier.service';

@Component({
    selector: 'app-update-supplier-info',
    templateUrl: './update-supplier-info.component.html',
    styleUrls: ['./update-supplier-info.component.css']
})
export class UpdateSupplierInfoComponent implements OnInit {
    // Global variable
    public updateSupplierForm: FormGroup;
    public supplierID: any;
    public cities: any;
    public suburbs: any;
    public supplier: any;
    public type: any;

    // Default constructor
    constructor(private service: UpdateSupplierInfoService,
                private route: ActivatedRoute,
                public location: Location,
                private CService: CreateUserService,
                private SService: CreateSupplierService,
                private snackBar: SnackbarNotificationService,
                private formBuilder: FormBuilder) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // Set supplier ID
        this.supplierID = this.route.snapshot.paramMap.get('supID');

        // Get supplier info
        this.service.GetSupplierInfo(this.supplierID)
            .subscribe(data => {
                this.supplier = data[0];
                // Load values onto form
                this.updateSupplierForm.controls.name.setValue(this.supplier.Name);
                this.updateSupplierForm.controls.type.setValue(this.supplier.typeID);
                this.updateSupplierForm.controls.email.setValue(this.supplier.email);
                this.updateSupplierForm.controls.contact.setValue(this.supplier.contactNumber);
                this.updateSupplierForm.controls.address1.setValue(this.supplier.Address1);
                this.updateSupplierForm.controls.address2.setValue(this.supplier.Address2);
                this.updateSupplierForm.controls.city.setValue(this.supplier.CityID);
                this.updateSupplierForm.controls.suburb.setValue(this.supplier.Suburb);
                // Suburb Load up
                this.suburbLoad(this.supplier.CityID);

            }, error => this.snackBar.handleError(error));

        // City Load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // Supplier Load up
        this.SService.GetType()
            .subscribe(data => this.type = data,
                error => this.snackBar.handleError(error));
    }

    // Update supplier
    updateSupplier(e) {
        if (e.valid) {
            const param: ISupplier = {
                supplierID: this.supplierID,
                name: e.value.name,
                type: e.value.type,
                contactNumber: e.value.contact,
                email: e.value.email.toLowerCase(),
                address1: e.value.address1,
                address2: e.value.address2,
                suburb: e.value.suburb
            };
            this.service.UpdateSupplier(param)
                .subscribe(
                    data => {
                        if (data[0].TRUE === 1) {
                            this.snackBar.UpdateSupplierSuccess(param.name);
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
        this.updateSupplierForm = this.formBuilder.group({
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
