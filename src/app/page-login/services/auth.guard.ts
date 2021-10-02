import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate  {

    
    constructor(private auth: AuthService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): 
         boolean | Observable<boolean> | Promise<boolean > {
            this.auth.authenticated = localStorage.getItem ('');
            
             if (this.auth.authenticated === 'true') {
                 return true;
             } else {
                this.router.navigate(['login']);
                return false;
             }
        return true;

    }

} 