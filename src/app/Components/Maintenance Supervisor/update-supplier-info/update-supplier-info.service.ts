import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdateSupplierInfoService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Update Supplier Info.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get specific supplier
    GetSupplierInfo(supplierID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'supplier&supplierID=' + supplierID) as Observable<any>;
    }

    // Update supplier
    UpdateSupplier(param: ISupplier): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'updateInfo', param) as Observable<any>;
    }
}

// Wrapper interface
export interface ISupplier {
    supplierID: number;
    name: string;
    type: number;
    contactNumber: string;
    email: string;
    address1: string;
    address2: string;
    suburb: string;
}
