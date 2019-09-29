import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../It Admin/manage-users/manage-users.service';

@Injectable({
    providedIn: 'root'
})
export class ManageSupplierService {
    // Global variables
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Manage Supplier.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get suppliers
    GetSuppliers(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'supplier') as Observable<any>;
    }

    // Change Status
    SupplierStatus(param: IUser): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'status', param) as Observable<any>;
    }
}
