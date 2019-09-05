import {Injectable} from '@angular/core';

// Custom import
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserReportsService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'User Reports.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get report
    GetUserReport(typeDesc, cityName, suburbName): Observable<any> {
        return this.httpClient.get(this.fullPath + this.action + 'userReport&typeDesc=' + typeDesc + '&cityName=' + cityName + '&suburbName=' + suburbName) as Observable<any>;
    }
}
