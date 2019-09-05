import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BusinessSettingsService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Business Settings.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get business info
    GetBusinessInfo(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'info') as Observable<any>;
    }

    // Upload business logo
    UploadBusinessLogo(param: FormData): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'logoUpload', param) as Observable<any>;
    }

    // Business settings update
    BusinessSettingsUpdate(param: IBusiness): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'update', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IBusiness {
    name;
    website;
    contact;
    vat;
    cityID;
}
