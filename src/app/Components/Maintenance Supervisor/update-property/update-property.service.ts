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
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get specific property
    GetPropertyInfo(propertyID): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Update Property.php?action=specificProperty&propertyID=' + propertyID) as Observable<any>;
    }

    // Update property
    UpdateProperty(param: IProperty): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Update Property.php?action=update', param) as Observable<any>;
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
