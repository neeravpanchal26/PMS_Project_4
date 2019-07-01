import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

// Custom Imports
import {LoginService} from './login.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    // Default Constructor
    constructor(private service: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.service.GetUserLoggedIn();
    }
}
