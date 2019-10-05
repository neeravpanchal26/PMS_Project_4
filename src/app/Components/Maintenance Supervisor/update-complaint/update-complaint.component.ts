import {Component, OnInit} from '@angular/core';

// Custom imports
import {IUpdateComplaint, UpdateComplaintService} from './update-complaint.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {AssignComplaintService} from '../assign-complaint/assign-complaint.service';
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {environment} from '../../../../environments/environment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
    selector: 'app-update-complaint',
    templateUrl: './update-complaint.component.html',
    styleUrls: ['./update-complaint.component.css']
})
export class UpdateComplaintComponent implements OnInit {
    // Global variable
    public updateComplaintForm: FormGroup;
    public complaints: any;
    public status: any;
    public complaintImage: any;
    public apiUrl = environment.api;

    // Default constructor
    constructor(private snackBar: SnackbarNotificationService,
                private AService: AssignComplaintService,
                private IService: ImageRetrieveService,
                private formBuilder: FormBuilder,
                public location: Location,
                private service: UpdateComplaintService) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // Load complaints
        this.service.GetComplaints()
            .subscribe(next => this.complaints = next, error => this.snackBar.handleError(error));

        // Load status
        this.service.GetStatus()
            .subscribe(next => this.status = next, error => this.snackBar.handleError(error));
        // Load blank image
        this.SetBlankImage();
    }

    // Complaint image load up
    GetComplaintImage(e) {
        this.AService.GetComplaintImages(e)
            .then(next => {
                if (next.size !== 0) {
                    this.complaintImage = this.IService.selectPhoto(next);
                } else {
                    this.SetBlankImage();
                }
            }, error => this.snackBar.handleError(error));
    }

    // Set blank image
    SetBlankImage() {
        this.complaintImage = this.apiUrl + '/api/Assets/blank350x150.png';
    }

    // Update complaint
    UpdateComplaint(e) {
        if (e.valid) {
            const param: IUpdateComplaint = {
                complaintID: e.value.complaint,
                desc: e.value.description,
                status: e.value.status
            };
            this.service.UpdateComplaint(param)
                .subscribe(data => {
                    if (data[0].TRUE === 1) {
                        this.snackBar.UpdateComplaintSuccess();
                        e.reset();
                    }
                }, error => this.snackBar.handleError(error));
        }
    }

    // From Builder
    buildForm(): void {
        this.updateComplaintForm = this.formBuilder.group({
            complaint: ['', Validators.required],
            description: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
            status: ['', Validators.required]
        });
    }
}
