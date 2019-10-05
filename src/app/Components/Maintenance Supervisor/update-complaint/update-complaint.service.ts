import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdateComplaintService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Update Complaint.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get Complaints
    GetComplaints(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaint') as Observable<any>;
    }

    // Get Status
    GetStatus(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'status') as Observable<any>;
    }

    // Update complaint
    UpdateComplaint(param: IUpdateComplaint): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'update', param) as Observable<any>;
    }
}

// Wrapper class
export interface IUpdateComplaint {
    complaintID: number;
    desc: string;
    status: number;
}
