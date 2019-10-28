import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardMaintenanceSupervisorService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Dashboard Maintenance Supervisor.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Complaints graph
    GetComplaints(days): Observable<any[]> {
        return this.httpClient.get(this.fullPath + this.action + 'complaints&days=' + days) as Observable<any[]>;
    }

    // Get Properties
    GetProperties(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'property') as Observable<any>;
    }

    // Get Owner
    GetOwners(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'owner') as Observable<any>;
    }

    // Get Suppliers
    GetSuppliers(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'suppliers') as Observable<any>;
    }
}
