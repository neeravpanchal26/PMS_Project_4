import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardTenantService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Dashboard Tenant.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get Complaints
    GetComplaints(tenantID, days): Observable<any[]> {
        return this.httpClient.get(this.fullPath + this.action + 'complaints&tenantID=' + tenantID + '&days=' + days) as Observable<any[]>;
    }

    // Open Complaints
    GetOpenComplaints(tenantID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'openComplaints&tenantID=' + tenantID) as Observable<any>;
    }

    // Close Complaints
    GetCloseComplaints(tenantID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'closeComplaints&tenantID=' + tenantID) as Observable<any>;
    }
}
