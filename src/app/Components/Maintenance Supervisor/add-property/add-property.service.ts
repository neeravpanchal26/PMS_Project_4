import {Injectable} from '@angular/core';

// Custom import
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddPropertyService {
    // Global Variable
    apiUrl = environment.api;

    // Default constructor
    constructor(private http: HttpClient) {
    }

    // Add property
    AddProperty(param: IAddProperty): Observable<any> {
        return this.http.post(this.apiUrl + '/api/Business/Add Property.php?action=create', param) as Observable<any>;
    }

    // Property Types
    getTypes(): Observable<any> {
        return this.http.get(this.apiUrl + '/api/Business/Add Property.php?action=type') as Observable<any>;
    }

    // Owner
    getOwner(): Observable<any> {
        return this.http.get(this.apiUrl + '/api/Business/Add Property.php?action=owner') as Observable<any>;
    }

    // Property status
    getStatus(): Observable<any> {
        return this.http.get(this.apiUrl + '/api/Business/Add Property.php?action=status') as Observable<any>;
    }

    // Property images upload
    uploadImage(param: FormData): Observable<any> {
        return this.http.post(this.apiUrl + '/api/Business/Add Property.php?action=imageUpload', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAddProperty {
    Name: any;
    Address1: any;
    Address2: any;
    Suburb: any;
    YearBuilt: any;
    Type: any;
    Owner: any;
    Bedrooms: any;
    Bathrooms: any;
    Size: any;
    Status: any;
}
