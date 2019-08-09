import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class SnackbarNotificationService {
    // Default Constructor
    constructor(private snackBar: MatSnackBar) {
    }

    // Default error
    handleError(error) {
        this.snackBar.open('An error has occurred ' + error.message + 'Please contact the administrator for further assistance.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack']
        });
    }

    // Form Error
    formFailure() {
        this.snackBar.open('Your form is invalid.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack']
        });
    }

    // Login component notifications
    loginSuccess(username) {
        this.snackBar.open('Welcome  ' + username, '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    loginFailure() {
        this.snackBar.open('Change a few things up and try again.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack']
        });
    }

    loginDeactivated(username) {
        this.snackBar.open('Your account has been deactivated. Please contact the administrator. ' + username, '', {
            duration: 10000,
            horizontalPosition: 'end',
            panelClass: ['snack']
        });
    }

    // Create User component notification
    CreateUserSuccess(firstName, surname) {
        this.snackBar.open(firstName + ' ' + surname + ' has been added to the system. User is currently deactivated.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Manage users component notification
    UserRoleChangeSuccess(userName) {
        this.snackBar.open(userName + ' \'s role has been changed!', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    UserStatusActivated(userName) {
        this.snackBar.open(userName + ' \'s account has been activated!', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    UserStatusDeactivated(userName) {
        this.snackBar.open(userName + ' \'s account has been deactivated!', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Change password component notification
    ChangePasswordSuccess() {
        this.snackBar.open('Your password has been updated.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Update personal info component notification
    UpdatePersonalInfoSuccess(userName) {
        this.snackBar.open(userName + ' your personal information has been updated.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Business setting component notification
    BusinessSettingUpdate() {
        this.snackBar.open('Your business information has been updated.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Create owner component notification
    CreateOwnerSuccess(firstName, surname) {
        this.snackBar.open(firstName + ' ' + surname + ' has been added to the system.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Update owner component notification
    UpdateOwnerSuccess(firstName, surname) {
        this.snackBar.open(firstName + ' ' + surname + ' has been updated.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }

    // Add property component notification
    AddPropertySuccess(Name) {
        this.snackBar.open(Name + ' has been added.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snack'],
        });
    }
}
