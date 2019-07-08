import {Injectable} from '@angular/core';

// Custom import
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChangePasswordService {
    // Global variable
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Old password check
    OldPasswordCheck(param: IPassword): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Change Password.php?action=oldPassword', param) as Observable<any>;
    }

    // Old password check
    UpdatePassword(param: IPassword): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Change Password.php?action=update', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IPassword {
    userID;
    userPassword;
}
