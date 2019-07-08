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
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get business info
    GetBusinessInfo(): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Business Settings.php?action=info') as Observable<any>;
    }

    // Upload business logo
    UploadBusinessLogo(param: FormData): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Business Settings.php?action=logoUpload', param) as Observable<any>;
    }

    // Business settings update
    BusinessSettingsUpdate(param: IBusiness): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Business Settings.php?action=update', param) as Observable<any>;
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
