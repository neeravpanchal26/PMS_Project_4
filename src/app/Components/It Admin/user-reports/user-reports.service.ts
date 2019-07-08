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
    public apiUrl = environment.api;

    // Default constructor
    constructor(private httpClient: HttpClient) {
    }

    // Get report
    GetUserReport(typeDesc, cityName, suburbName): Observable<any> {
        return this.httpClient.get(this.apiUrl + '/api/Business/User Reports.php?action=userReport&typeDesc=' + typeDesc + '&cityName=' + cityName + '&suburbName=' + suburbName) as Observable<any>;
    }
}
