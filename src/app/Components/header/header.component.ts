import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

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

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    // Default Constructor
    constructor(private breakpointObserver: BreakpointObserver,
                private lService: LoginService,
                private router: Router) {
    }

    // Form Load
    ngOnInit() {
        // Get user type
        this.userType = this.lService.GetUserType();

        // Get username
        this.userName = this.lService.GetUserName();

        // Get Current Path
        this.route = this.router.url;
        const splitter = this.route.split('_');
        this.route = splitter.join(' ').substr(1);
    }
}
