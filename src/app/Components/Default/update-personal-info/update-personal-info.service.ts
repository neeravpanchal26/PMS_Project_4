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
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get user info
    GetSpecificUser(userID): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Update Personal Info.php?action=specificUser&userID=' + userID) as Observable<any>;
    }

    // Get all suburbs
    GetAllSuburbs(): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Update Personal Info.php?action=suburb') as Observable<any>;
    }

    // Update user info
    UpdatePersonalInfo(param: IUpdateUserInfo): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Update Personal Info.php?action=update', param) as Observable<any>;
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
