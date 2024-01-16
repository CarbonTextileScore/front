import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MainService } from "src/services/main.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private mainService: MainService,
    private router: Router
  ) {}

  canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.mainService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
