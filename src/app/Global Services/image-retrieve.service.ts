import {Injectable} from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageRetrieveService {
    // Global variable
    private apiUrl = environment.api;
    private basePath = environment.business;
    private file = 'Business Settings.php';
    private action = '?action=';
    private fullPath = this.apiUrl + this.basePath + this.file;

    // Default constructor
    constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
    }

    // Get business logo
    GetBusinessLogo(): Observable<Blob> {
        return this.httpClient.get(this.fullPath + this.action + 'logoDownload', {responseType: 'blob'}) as Observable<Blob>;
    }

    // Image to URL
    selectPhoto(photos: any) {
        return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(photos));
    }

    // Image bypass
    selectPhoto2(photos) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(photos);
    }
}
