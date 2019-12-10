import { Injectable } from '@angular/core';
import { CanActivate, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot 
        } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

              }

}
