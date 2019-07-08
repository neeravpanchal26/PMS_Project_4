import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ILogin, LoginService} from '../../../Global Services/login.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {Router} from '@angular/router';
import {ImageRetrieveService} from '../../../Global Services/image-retrieve.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // Global Declaration
    public result: any;
    public loginForm: FormGroup;
    public date: Date;
    public logo: any;
    public apiUrl = environment.api;

    // Default Constructor
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private service: LoginService,
        private snackBar: SnackbarNotificationService,
        private IService: ImageRetrieveService) {
    }

    // Form Load
    ngOnInit() {
        // Form validation
        this.buildForm();

        // Current year
        this.date = new Date();

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

    // Login check method
    loginCheck(e) {
        const param: ILogin = {
            Username: e.value.email.toLowerCase(),
            Password: e.value.password
        };

        this.service.check(param)
            .subscribe(data => {
                    this.result = data[0];
                    if (this.result.Active === 1) {
                        this.snackBar.loginSuccess(this.result.username);
                        this.service.SetUserLoggedIn(this.result.UserTypeID, this.result.username, this.result.UserID);
                        if (this.result.UserTypeID === 1) {
                            this.router.navigate(['Dashboard_It_Admin']);
                        } else if (this.result.UserTypeID === 3) {
                            this.router.navigate(['Dashboard_Supervisor']);
                        }
                        e.controls.password.reset();
                    } else if (this.result.FALSE === 0) {
                        this.snackBar.loginFailure();
                        e.controls.password.reset();
                    } else if (this.result.Active === 0) {
                        this.snackBar.loginDeactivated(this.result.username);
                        e.controls.password.reset();
                    }
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Form Builder
    buildForm(): void {
        const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }
}
