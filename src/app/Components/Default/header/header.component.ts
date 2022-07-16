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
    public ItHelp = [];
    public TenantHelp = [];
    public SupervisorHelp = [];

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

        // IT Admin help array
        this.ItHelp = [
            {imagePath: './assets/ItHelp/1.png', count: 1},
            {imagePath: './assets/ItHelp/2.png', count: 2},
            {imagePath: './assets/ItHelp/3.png', count: 3},
            {imagePath: './assets/ItHelp/4.png', count: 4},
            {imagePath: './assets/ItHelp/5.png', count: 5},
            {imagePath: './assets/ItHelp/6.png', count: 6},
            {imagePath: './assets/ItHelp/7.png', count: 7}
        ];

        // Tenant Help array
        this.TenantHelp = [
            {imagePath: './assets/TenantHelp/1.png', count: 1},
            {imagePath: './assets/TenantHelp/2.png', count: 2},
            {imagePath: './assets/TenantHelp/3.png', count: 3},
            {imagePath: './assets/TenantHelp/4.png', count: 4},
            {imagePath: './assets/TenantHelp/5.png', count: 5}
        ];

        // Supervisor Help array
        this.SupervisorHelp = [
            {imagePath: './assets/SupervisorHelp/1.png', count: 1},
            {imagePath: './assets/SupervisorHelp/2.png', count: 2},
            {imagePath: './assets/SupervisorHelp/3.png', count: 3},
            {imagePath: './assets/SupervisorHelp/4.png', count: 4},
            {imagePath: './assets/SupervisorHelp/5.png', count: 5},
            {imagePath: './assets/SupervisorHelp/6.png', count: 6},
            {imagePath: './assets/SupervisorHelp/7.png', count: 7},
            {imagePath: './assets/SupervisorHelp/8.png', count: 8},
            {imagePath: './assets/SupervisorHelp/9.png', count: 9},
            {imagePath: './assets/SupervisorHelp/10.png', count: 10},
            {imagePath: './assets/SupervisorHelp/11.png', count: 11},
            {imagePath: './assets/SupervisorHelp/12.png', count: 12},
            {imagePath: './assets/SupervisorHelp/13.png', count: 13},
            {imagePath: './assets/SupervisorHelp/14.png', count: 14},
            {imagePath: './assets/SupervisorHelp/15.png', count: 15},
        ];
    }
}
