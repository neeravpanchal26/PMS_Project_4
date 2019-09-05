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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Update Owner Info.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get specific owner
    GetOwnerInfo(ownerID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'owner&ownerID=' + ownerID) as Observable<any>;
    }

    // Update owner
    UpdateOwner(param: IOwner): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'updateInfo', param) as Observable<any>;
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
