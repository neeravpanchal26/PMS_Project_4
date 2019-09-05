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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Create Owner.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Create owner
    CreateOwner(param: IAddOwner): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'create', param) as Observable<any>;
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
