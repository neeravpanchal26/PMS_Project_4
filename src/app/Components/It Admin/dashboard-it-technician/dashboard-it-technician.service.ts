import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardItTechnicianService {
    // Global variable
    public apiUrl = environment.api;

    // Default Constructor
    constructor(private httpClient: HttpClient) {
    }

    // Users Graph
    GetUsers(days): Observable<any[]> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Dashboard It Admin.php?action=users&days=' + days) as Observable<any[]>;
    }
}
