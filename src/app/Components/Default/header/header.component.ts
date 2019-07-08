import {Component, OnInit} from '@angular/core';

// Custom imports
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginService} from '../../../Global Services/login.service';
import {Router} from '@angular/router';
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {environment} from '../../../../environments/environment';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    // Global variable
    public userType: any;
    public userName: any;
    public route: string;
    public logo: any;
    public apiUrl = environment.api;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    // Default Constructor
    constructor(private breakpointObserver: BreakpointObserver,
                private LService: LoginService,
                private router: Router,
                private IService: ImageRetrieveService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form Load
    ngOnInit() {
        // Get user type
        this.userType = this.LService.GetUserType();

        // Get username
        this.userName = this.LService.GetUserName();

        // Get Current Path
        this.route = this.router.url;
        const splitter = this.route.split('_');
        this.route = splitter.join(' ').substr(1);
        this.route = this.route.replace(/[^a-zA-Z ]/g, '');

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
