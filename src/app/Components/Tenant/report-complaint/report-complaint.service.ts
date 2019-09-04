import {Injectable} from '@angular/core';

// Custom import
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReportComplaintService {
    // Global variable
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get Category
    GetCategory(): Observable<any[]> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Report Complaint.php?action=category') as Observable<any[]>;
    }

    // Get Category image
    async GetCategoryImage(imgID) {
        return await this.httpClient.get(this.apiUrl + '/api/Business/Report Complaint.php?action=categoryImage&imgID=' + imgID, {responseType: 'blob'}).toPromise();
    }

    // Get Sub Category
    GetSubCategory(catID): Observable<any[]> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Report Complaint.php?action=subCategory&catID=' + catID) as Observable<any[]>;
    }

    // Get Sub Category images
    async GetSubImage(subID) {
        return await this.httpClient.get(this.apiUrl + '/api/Business/Report Complaint.php?action=subImage&subID=' + subID, {responseType: 'blob'}).toPromise();
    }

    // Get Property
    GetProperty(tID): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/Report Complaint.php?action=property&tID=' + tID) as Observable<any>;
    }

    // Add complaint
    AddComplaint(param: IAddComplaint): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Report Complaint.php?action=add', param) as Observable<any>;
    }

    // Complaint image upload
    UploadImage(param: FormData): Observable<any> {
        return this.httpClient.post(this.apiUrl + '/api/Business/Report Complaint.php?action=imageUpload', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAddComplaint {
    propertyID: any;
    tenantID: any;
    desc: any;
    subCat: any;
}
