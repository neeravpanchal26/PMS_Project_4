import {Injectable} from '@angular/core';

// Custom import
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssignComplaintService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Assign Complaint.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get supplier
    GetSupplier(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'supplier') as Observable<any>;
    }

    // Get complaints
    GetComplaints(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaints') as Observable<any>;
    }

    // Get complaint images
    async GetComplaintImages(compID) {
        return await this.httpClient.get(this.fullPath + this.action + 'images&compID=' + compID, {responseType: 'blob'}).toPromise();
    }

    // Assign complaint
    AssignComplaint(param: IAssignComplaint): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'assign', param) as Observable<any>;
    }

    // Email complaint
    EmailComplaint(param: IEmailComplaint): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'email', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAssignComplaint {
    compID: any;
    suppID: any;
}

export interface IEmailComplaint {
    suppEmail: any;
    complaints: any;
    businessInfo: any;
}
