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
            panelClass: ['danger']
        });
    }

    // Login component notifications
    loginSuccess(username) {
        this.snackBar.open('Welcome ' + username, '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['success'],
        });
    }

    loginFailure() {
        this.snackBar.open('Change a few things up and try again.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['danger']
        });
    }

    loginDeactivated(username) {
        this.snackBar.open('Your account has been deactivated. Please contact the administrator. ' + username, '', {
            duration: 10000,
            horizontalPosition: 'end',
            panelClass: ['warning']
        });
    }
}
