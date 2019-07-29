import {Component, OnInit} from '@angular/core';

// Custom imports
import {AddPropertyService} from './add-property.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {CreateUserService} from '../../It Admin/create-user/create-user.service';

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
    // Global variable
    public addPropertyForm: FormGroup;
    public img = '';
    public cities: any;
    public suburbs: any;
    public owners: any;
    public PropType: any;

    // Default constructor
    constructor(private service: AddPropertyService,
                private snackBar: SnackbarNotificationService,
                private formBuilder: FormBuilder,
                private CService: CreateUserService) {
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
    }

    // Add property
    addProperty(e) {

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
        this.addPropertyForm = this.formBuilder.group({
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
