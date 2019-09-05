import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UpdatePersonalInfoService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Update Personal Info.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get user info
    GetSpecificUser(userID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'specificUser&userID=' + userID) as Observable<any>;
    }

    // Update user info
    UpdatePersonalInfo(param: IUpdateUserInfo): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'update', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IUpdateUserInfo {
    userID: any;
    firstName: any;
    lastName: any;
    dob: any;
    contactNumber: any;
    email: any;
    address1: any;
    address2: any;
    suburb: any;
}
