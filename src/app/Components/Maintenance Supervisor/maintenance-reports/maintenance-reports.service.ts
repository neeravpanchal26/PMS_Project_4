import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MaintenanceReportsService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Maintenance Report.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
    }

    // Get Property report
    GetPropertyReport(ownerName, suburbName, cityName, startDate, endDate): Observable<any[]> {
        const param = new HttpParams()
            .set('ownerName', ownerName)
            .set('suburbName', suburbName)
            .set('cityName', cityName)
            .set('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd'))
            .set('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd'));
        return this.httpClient.get(this.fullPath + this.action + 'property', {params: param}) as Observable<any[]>;
    }

    // Get Complaint Status
    GetComplaintStatus(): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaintStatus') as Observable<any>;
    }

    // Get Complaint
    GetComplaint(propName, tenantName, subCat, cat, ownerName, complaintStatus, startDate, endDate): Observable<any[]> {
        const param = new HttpParams()
            .set('propName', propName)
            .set('tenantName', tenantName)
            .set('subCat', subCat)
            .set('cat', cat)
            .set('ownerName', ownerName)
            .set('complaintStatus', complaintStatus)
            .set('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd'))
            .set('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd'));
        return this.httpClient.get(this.fullPath + this.action + 'complaint', {params: param}) as Observable<any[]>;
    }

    // Get Complaint by property id
    GetComplaintByProperty(propID): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'complaintProperty&propID=' + propID) as Observable<any>;
    }

    // Get Compaint history
    GetComplaintHistory(propName, complaint, subCat, cat, supplier, complaintStatus, startDate, endDate): Observable<any[]> {
        const param = new HttpParams()
            .set('propName', propName)
            .set('complaint', complaint)
            .set('subCat', subCat)
            .set('cat', cat)
            .set('supplier', supplier)
            .set('complaintStatus', complaintStatus)
            .set('startDate', this.datePipe.transform(startDate, 'yyyy-MM-dd'))
            .set('endDate', this.datePipe.transform(endDate, 'yyyy-MM-dd'));
        return this.httpClient.get(this.fullPath + this.action + 'complaintHistory', {params: param}) as Observable<any[]>;
    }
}
