import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";
import * as moment from 'moment';



@Injectable()
export class CanActivateAdmin implements CanActivate {
  constructor(private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('token');
    if (token) {
      var decoded: any = jwt_decode(token);
      if (Number(moment.now().toString().substring(10)) < Number(decoded.exp))
        return true;
    }



    return false;
  }

}