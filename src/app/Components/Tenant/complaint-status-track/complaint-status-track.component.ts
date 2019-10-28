import {Component, OnInit} from '@angular/core';

// Custom imports
import {ComplaintStatusTrackService} from './complaint-status-track.service';
import {LoginService} from '../../../Global Services/login.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-complaint-status-track',
    templateUrl: './complaint-status-track.component.html',
    styleUrls: ['./complaint-status-track.component.css']
})
export class ComplaintStatusTrackComponent implements OnInit {
    // Global variable
    public complaints: any;

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['Date', 'complaintDetailDesc', 'statusDesc'];

    constructor(private service: ComplaintStatusTrackService,
                private snackBar: SnackbarNotificationService,
                private LService: LoginService) {
    }

    // Form Load
    ngOnInit() {
        // Load complaints
        this.service.GetComplaint(this.LService.GetUserID())
            .subscribe(data => this.complaints = data, error => this.snackBar.handleError(error));
    }

    // Load all complaints
    LoadUpComplaints(e) {
        if (e === true) {
            // Load complaints
            this.service.GetComplaintAll(this.LService.GetUserID())
                .subscribe(data => this.complaints = data, error => this.snackBar.handleError(error));
        } else {
            // Load complaints
            this.service.GetComplaint(this.LService.GetUserID())
                .subscribe(data => this.complaints = data, error => this.snackBar.handleError(error));
        }
    }

    // Load complaint details
    LoadComplaintDetails(e) {
        // Load complaint details
        this.service.GetComplaintDetails(e)
            .subscribe(data => this.dataSource = new MatTableDataSource<any>(data), error => this.snackBar.handleError(error));
    }
}
