import {Component, OnInit} from '@angular/core';

// Custom imports
import {Location} from '@angular/common';
import {SnackbarNotificationService} from '../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    // Global variable

    // Default constructor
    constructor(private snackBar: SnackbarNotificationService,
                private location: Location) {
    }

    // Form Load
    ngOnInit() {
    }

    // Locate back
    locateBack() {
        this.location.back();
    }
}
