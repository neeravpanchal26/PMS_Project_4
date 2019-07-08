import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ManageUsersService {
    // Global variable
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get User
    GetUsers(userID): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Manage Users.php?action=users&userID=' + userID) as Observable<any>;
    }

    // Change user type
    ChangeUserType(param: IUser): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Manage Users.php?action=type', param) as Observable<any>;
    }

    // Change user status
    ChangeUserStatus(param: IUser): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Manage Users.php?action=status', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IUser {
    userID;
    status;
}
