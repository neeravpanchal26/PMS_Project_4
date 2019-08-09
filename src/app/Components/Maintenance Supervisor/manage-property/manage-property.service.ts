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
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get properties
    GetProperties(): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Manage Property.php?action=properties') as Observable<any>;
    }
}
