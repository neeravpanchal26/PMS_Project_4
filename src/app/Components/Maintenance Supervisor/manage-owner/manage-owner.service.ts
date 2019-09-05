import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {IUser} from '../../It Admin/manage-users/manage-users.service';

@Injectable({
    providedIn: 'root'
})
export class ManageOwnerService {
    // Global variables
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Manage Owner.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get owners
    GetOwners(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'owners') as Observable<any>;
    }

    // Change status
    OwnerStatus(param: IUser): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'status', param) as Observable<any>;
    }
}
