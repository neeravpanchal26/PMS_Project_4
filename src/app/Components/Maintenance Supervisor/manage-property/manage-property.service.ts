import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ManagePropertyService {
    // Global variables
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Manage Property.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get properties
    GetProperties(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'properties') as Observable<any>;
    }
}
