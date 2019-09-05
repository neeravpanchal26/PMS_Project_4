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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Assign Property.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get property
    GetProperty(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'property') as Observable<any>;
    }

    // Get tenant
    GetTenant(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'tenant') as Observable<any>;
    }

    // Get property photo ID
    async GetPropertyImageID(propertyID) {
        return await this.httpClient.get(this.fullPath + this.action + 'imageID&propertyID=' + propertyID).toPromise();
    }

    // Get property photo
    async GetPropertyImages(imgID) {
        return await this.httpClient.get(this.fullPath + this.action + 'propImg&imgID=' + imgID, {responseType: 'blob'}).toPromise();
    }

    // Assign property add
    AssignProperty(param: IAssignProperty): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'add', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAssignProperty {
    propertyID: number;
    tenantID: number;
    startDate: any;
    endDate: any;
}

