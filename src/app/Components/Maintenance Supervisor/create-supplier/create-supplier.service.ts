import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreateSupplierService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Create Supplier.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Property type
    GetType(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'type') as Observable<any>;
    }

    // Create supplier
    CreateSupplier(param: IAddSupplier): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'create', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAddSupplier {
    name: string;
    type: number;
    contactNumber: string;
    email: string;
    address1: string;
    address2: string;
    suburb: string;
}
