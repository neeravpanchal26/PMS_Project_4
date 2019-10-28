import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComplaintStatusTrackService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Check Complaint Status.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get complaints
    GetComplaint(tenantID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaints&tenantID=' + tenantID) as Observable<any>;
    }

    // Get complaints all
    GetComplaintAll(tenantID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaintsAll&tenantID=' + tenantID) as Observable<any>;
    }

    // Get Complaint Details
    GetComplaintDetails(complaintID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaintDetails&complaintID=' + complaintID) as Observable<any>;
    }
}
