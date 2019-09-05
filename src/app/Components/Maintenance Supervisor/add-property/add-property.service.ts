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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Add Property.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private http: HttpClient) {
    }

    // Add property
    AddProperty(param: IAddProperty): Observable<any> {
        return this.http.post(this.fullPath + this.action + 'create', param) as Observable<any>;
    }

    // Property Types
    getTypes(): Observable<any> {
        return this.http.get(this.fullPath + this.action + 'type') as Observable<any>;
    }

    // Owner
    getOwner(): Observable<any> {
        return this.http.get(this.fullPath + this.action + 'owner') as Observable<any>;
    }

    // Property status
    getStatus(): Observable<any> {
        return this.http.get(this.fullPath + this.action + 'status') as Observable<any>;
    }

    // Property images upload
    uploadImage(param: FormData): Observable<any> {
        return this.http.post(this.fullPath + this.action + 'imageUpload', param) as Observable<any>;
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
