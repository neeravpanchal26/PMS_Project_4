import {Component, OnInit} from '@angular/core';

// Custom imports
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ChangePasswordService, IPassword} from '../change-password/change-password.service';
import {SnackbarNotificationService} from '../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    // Global variable
    public resetForm: FormGroup;
    public userID: any;

    // Default constructor
    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private CService: ChangePasswordService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Form Validation
        this.buildForm();

        // Set User ID
        this.userID = this.route.snapshot.paramMap.get('userID');
    }

    // Reset password
    ResetPassword(e) {
        if (e.valid) {
            const param: IPassword = {
                    userID: this.userID,
                    userPassword: e.value.password
                }
            ;
            this.CService.UpdatePassword(param)
                .subscribe(
                    data => {
                        if (data === true) {
                            this.snackBar.ChangePasswordSuccess();
                            e.reset();
                        }
                    },
                    error => this.snackBar.handleError(error)
                );
        } else if (e.invalid) {
            this.markFormGroupTouched(e);
            this.snackBar.formFailure();
        }
    }

    // Mark as touched
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
        this.resetForm = this.formBuilder.group({
            password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
        });
    }
}
