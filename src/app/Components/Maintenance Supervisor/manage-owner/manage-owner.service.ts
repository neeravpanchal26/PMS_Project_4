import { Injectable } from '@angular/core';

// Custom imports
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageOwnerService {
  // Global variables
  public apiUrl = environment.api;

  // Default constructor
  constructor(private httpClient:HttpClient) { }

  // Get owners
  GetOwners():Observable<any> {
    return this.httpClient.get(this.apiUrl+'/api/Business/Manage Owner.php?action=owners') as Observable<any>;
  }
}
