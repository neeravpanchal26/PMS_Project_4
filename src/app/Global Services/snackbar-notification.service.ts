import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class SnackbarNotificationService {
    // Global variable
    private duration: any = 3000;
    private position: any = 'end';
    private class: any = 'snack';

    // Default Constructor
    constructor(private snackBar: MatSnackBar) {
    }

    // Default error
    handleError(error) {
        this.snackBar.open('An error has occurred ' + error.message + 'Please contact the administrator for further assistance.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class]
        });
    }

    // Form Error
    formFailure() {
        this.snackBar.open('Your form is invalid.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class]
        });
    }

    // Login component notifications
    loginSuccess(username) {
        this.snackBar.open('Welcome  ' + username, '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    loginFailure() {
        this.snackBar.open('Change a few things up and try again.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class]
        });
    }

    loginDeactivated(username) {
        this.snackBar.open('Your account has been deactivated. Please contact the administrator. ' + username, '', {
            duration: 10000,
            horizontalPosition: this.position,
            panelClass: [this.class]
        });
    }

    // Create User component notification
    CreateUserSuccess(firstName, surname) {
        this.snackBar.open(firstName + ' ' + surname + ' has been added to the system. User is currently deactivated.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Manage users component notification
    UserRoleChangeSuccess(userName) {
        this.snackBar.open(userName + '\'s role has been changed!', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    UserStatusActivated(userName) {
        this.snackBar.open(userName + ' \'s account has been activated!', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    UserStatusDeactivated(userName) {
        this.snackBar.open(userName + ' \'s account has been deactivated!', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Change password component notification
    ChangePasswordSuccess() {
        this.snackBar.open('Your password has been updated.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Update personal info component notification
    UpdatePersonalInfoSuccess(userName) {
        this.snackBar.open(userName + ' your personal information has been updated.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Business setting component notification
    BusinessSettingUpdate() {
        this.snackBar.open('Your business information has been updated.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Create owner component notification
    CreateOwnerSuccess(firstName, surname) {
        this.snackBar.open(firstName + ' ' + surname + ' has been added to the system.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Update owner component notification
    UpdateOwnerSuccess(firstName, surname) {
        this.snackBar.open(firstName + ' ' + surname + ' has been updated.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Add property component notification
    AddPropertySuccess(Name) {
        this.snackBar.open(Name + ' has been added.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Manage owner component notification
    OwnerStatusActivated(ownerName) {
        this.snackBar.open(ownerName + ' \'s has been activated!', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    OwnerStatusDeactivated(ownerName) {
        this.snackBar.open(ownerName + ' \'s has been deactivated!', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Update property component notification
    UpdatePropertySuccess(Name) {
        this.snackBar.open(Name + ' has been updated.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }

    // Assign property component notification
    AssignPropertySuccess() {
        this.snackBar.open('Property has been successfully assigned.', '', {
            duration: this.duration,
            horizontalPosition: this.position,
            panelClass: [this.class],
        });
    }
}
