import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdateOwnerInfoService {
    // Global variable
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get specific owner
    GetOwnerInfo(ownerID): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Update Owner Info.php?action=owner&ownerID=' + ownerID) as Observable<any>;
    }

    // Update owner
    UpdateOwner(param: IOwner): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Update Owner Info.php?action=updateInfo', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IOwner {
    ownerID: any;
    firstName: any;
    lastName: any;
    contactNumber: any;
    email: any;
    address1: any;
    address2: any;
    suburb: any;
}
