import {Component, OnInit} from '@angular/core';

// Custom imports
import {BusinessSettingsService} from '../../It Admin/business-settings/business-settings.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    // Global Variables
    public date: Date;
    public businessInfo: any;

    // Default Constructor
    constructor(private BService: BusinessSettingsService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form Load
    ngOnInit() {
        // Current year
        this.date = new Date();

        // Business info load up
        this.BService.GetBusinessInfo()
            .subscribe(data => this.businessInfo = data[0], error => this.snackBar.handleError(error));
    }
}
