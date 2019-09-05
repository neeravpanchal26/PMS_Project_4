import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdatePropertyService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Update Property.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get specific property
    GetPropertyInfo(propertyID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'specificProperty&propertyID=' + propertyID) as Observable<any>;
    }

    // Update property
    UpdateProperty(param: IProperty): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'update', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IProperty {
    PropertyID: any;
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
