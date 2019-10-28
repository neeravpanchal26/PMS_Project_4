import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAddUser} from '../../It Admin/create-user/create-user.service';

@Injectable({
    providedIn: 'root'
})
export class CreateTenantService {
    // Global variables
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Create Tenant.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default Constructor
    constructor(private httpClient: HttpClient) {
    }

    // Create user
    CreateTenant(param: IAddUser): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'create', param) as Observable<any>;
    }
}
