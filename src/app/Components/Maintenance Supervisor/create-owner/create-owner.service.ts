import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreateOwnerService {
    // Global variable
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Create owner
    CreateOwner(param: IAddOwner): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Create Owner.php?action=create', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAddOwner {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    address1: string;
    address2: string;
    suburb: string;
}
