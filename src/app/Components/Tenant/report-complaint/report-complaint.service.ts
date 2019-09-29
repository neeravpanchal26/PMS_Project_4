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
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Report Complaint.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get Category
    GetCategory(): Observable<any[]> {
        return this.httpClient.get(this.fullPath + this.action + 'category') as Observable<any[]>;
    }

    // Get Category image
    async GetCategoryImage(imgID) {
        return await this.httpClient.get(this.fullPath + this.action + 'categoryImage&imgID=' + imgID, {responseType: 'blob'}).toPromise();
    }

    // Get Sub Category
    GetSubCategory(catID): Observable<any[]> {
        return this.httpClient.get(this.fullPath + this.action + 'subCategory&catID=' + catID) as Observable<any[]>;
    }

    // Get Sub Category images
    async GetSubImage(subID) {
        return await this.httpClient.get(this.fullPath + this.action + 'subImage&subID=' + subID, {responseType: 'blob'}).toPromise();
    }

    // Add complaint
    AddComplaint(param: IAddComplaint): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'add', param) as Observable<any>;
    }

    // Complaint image upload
    UploadImage(param: FormData): Observable<any> {
        return this.httpClient.post(this.fullPath + this.action + 'imageUpload', param) as Observable<any>;
    }
}

// Wrapper interface
export interface IAddComplaint {
    tenantID: any;
    desc: any;
    subCat: any;
}
