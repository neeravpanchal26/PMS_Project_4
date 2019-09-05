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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Dashboard It Admin.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default Constructor
    constructor(private httpClient: HttpClient) {
    }

    // Users Graph
    GetUsers(days): Observable<any[]> {
        return this.httpClient.get(this.fullPath + this.action + 'users&days=' + days) as Observable<any[]>;
    }
}
