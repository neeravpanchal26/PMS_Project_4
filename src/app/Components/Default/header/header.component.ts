import {Component} from '@angular/core';

// Custom imports
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginService} from '../../../Global Services/login.service';
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {environment} from '../../../../environments/environment';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {BusinessSettingsService} from '../../It Admin/business-settings/business-settings.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    // Global variable
    public userType: any;
    public userName: any;
    public logo: any;
    public BusinessName: any;
    public apiUrl = environment.api;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    // Default Constructor
    constructor(private breakpointObserver: BreakpointObserver,
                private LService: LoginService,
                private IService: ImageRetrieveService,
                private BService: BusinessSettingsService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form Load
    ngOnInit() {
        // Get user type
        this.userType = this.LService.GetUserType();

        // Get username
        this.userName = this.LService.GetUserName();

        // Get Business Name
        this.BService.GetBusinessInfo()
            .subscribe(data => this.BusinessName = data[0].BusinessName, error => this.snackBar.handleError(error));

        // Logo load up
        this.IService.GetBusinessLogo()
            .subscribe(
                data => {
                    this.logo = this.IService.selectPhoto(data);
                    if (data.size === 0) {
                        this.logo = this.apiUrl + '/api/Assets/blank350x150.png';
                    }
                },
                error => this.snackBar.handleError(error)
            );
    }
}
