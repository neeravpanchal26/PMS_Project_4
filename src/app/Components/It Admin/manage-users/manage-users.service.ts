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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Manage Users.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get User
    GetUsers(userID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'users&userID=' + userID) as Observable<any>;
    }

    // Change user type
    ChangeUserType(param: IUser): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'type', param) as Observable<any>;
    }

    // Change user status
    ChangeUserStatus(param: IUser): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'status', param) as Observable<any>;
    }

    // Get user type
    GetUserType(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'userTypes') as Observable<any>;
    }
}

// Wrapper interface
export interface IUser {
    userID;
    status;
}
