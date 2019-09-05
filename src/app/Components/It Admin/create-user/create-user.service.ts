import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreateUserService {
    // Global variables
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Create User.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default Constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get user type
    GetUserType(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'userType') as Observable<any>;
    }

    // Get City
    GetCity(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'city') as Observable<any>;
    }

    // Get Suburb
    GetSuburb(cityID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'suburb&cityID=' + cityID) as Observable<any>;
    }

    // Create user
    CreateUser(param: IAddUser): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'create', param) as Observable<any>;
    }
}

// Wrapper Interface
export interface IAddUser {
    firstName: string;
    lastName: string;
    dob: string;
    contactNumber: string;
    email: string;
    password: string;
    userType: string;
    address1: string;
    address2: string;
    suburb: string;
}
