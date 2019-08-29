import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssignPropertyService {
    // Global variable
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get property
    GetProperty(): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Assign Property.php?action=property') as Observable<any>;
    }

    // Get tenant
    GetTenant(): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Assign Property.php?action=tenant') as Observable<any>;
    }

    // Get property photo ID
    async GetPropertyImageID(propertyID) {
        return await this.httpClient.get(this.apiUrl + '/api/Business/Assign Property.php?action=imageID&propertyID=' + propertyID).toPromise();
    }

    // Get property photo
    async GetPropertyImages(imgID) {
        return await this.httpClient.get(this.apiUrl + '/api/Business/Assign Property.php?action=propImg&imgID=' + imgID, {responseType: 'blob'}).toPromise();
    }

    // Assign property add
    AssignProperty(param: IAssignProperty): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Assign Property.php?action=add', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAssignProperty {
    propertyID: number;
    tenantID: number;
    startDate: any;
    endDate: any;
}

