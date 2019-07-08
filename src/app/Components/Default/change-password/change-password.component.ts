import {Component, OnInit} from '@angular/core';

// Custom imports
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {ChangePasswordService, IPassword} from './change-password.service';
import {LoginService} from '../../../Global Services/login.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
    // Global variable
    public changePasswordForm: FormGroup;

    // Default constructor
    constructor(private service: ChangePasswordService,
                private LService: LoginService,
                private formBuilder: FormBuilder,
                private snackBar: SnackbarNotificationService,
                private router:Router) {
    }

    // Password Validator
    static passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('newPassword').value !== c.get('cNewPassword').value) {
            return {invalid: true};
        }
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();
    }

    // Old password check method
    oldPasswordCheck(e) {
        if (e.valid) {
            const param: IPassword = {
                userID: this.LService.GetUserID(),
                userPassword: e.value.oldPassword
            };

            this.service.OldPasswordCheck(param)
                .subscribe(
                    data => {
                        const result = data[0];
                        if (result.result === 1) {
                            this.changePassword(e);
                        } else if (result.result === 0) {
                            e.controls.oldPassword.setErrors({incorrect: true});
                        }
                    },
                    error => this.snackBar.handleError(error)
                );
        } else if (e.invalid) {
            this.markFormGroupTouched(e);
            this.snackBar.formFailure();
        }
    }

    // Change password method
    changePassword(e) {
        const param: IPassword = {
            userID: this.LService.GetUserID(),
            userPassword: e.value.passwords.cNewPassword
        };

        this.service.UpdatePassword(param)
            .subscribe(
                data => {
                    if (data === true) {
                        this.router.navigate(['']);
                        this.snackBar.ChangePasswordSuccess();
                        e.reset();
                    }
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Mark As Touched
    private markFormGroupTouched(formGroup: FormGroup) {
        (Object as any).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    // Form Builder
    buildForm(): void {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
            passwords: this.formBuilder.group({
                newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
                cNewPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
            }, {validator: ChangePasswordComponent.passwordConfirming})
        });
    }
}
