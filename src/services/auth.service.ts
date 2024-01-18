import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { MainService } from "./main.service";
import { jwtDecode } from "jwt-decode";
import { JWTToken } from "src/models/JWTToken.model";
import { AuthModel } from "src/models/Auth.model";
import { throwError } from "rxjs";
import {AuthorityDto} from "../app/domain/authority.dto";

const API_URL= environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private refreshTokenTimeout: any;

	constructor(
		private http: HttpClient,
		private router: Router,
		private mainService: MainService,
	) {}

	login(dto: AuthorityDto) {
		return this.http.post<AuthorityDto>(API_URL+'login/', dto, {observe: 'response'}).subscribe({
			next: (data: HttpResponse<any>)  => {
				this.mainService.setAuth(<AuthModel>jwtDecode(JSON.stringify(<JWTToken>{access: data.headers.get('Token')})));
				this.mainService.setToken(<JWTToken>{access: data.headers.get('Token')})
				this.setRefreshTokenTimeout(this.mainService.getAuth().exp * 1000);
				this.router.navigate(["/home/dashboard"]);
			}
		});;
	}

	setRefreshTokenTimeout(expirationTime: number) {
    const timeout = expirationTime - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refresh(), timeout);
  }

	refresh() {
    return this.http
    .post(API_URL+'login/refresh/', JSON.stringify({'refresh':this.mainService.getToken()?.refresh}))
    .subscribe({
      next: data => {
        this.mainService.setToken(<JWTToken>data);
        this.setRefreshTokenTimeout(this.mainService.getAuth().exp * 1000);
      },
      error: err => {
        this.logout();
        this.handleError(err);
      }
    });
  }

	logout(){
    this.mainService.deleteToken();
    this.mainService.deleteAuth();
    this.clearRefreshTokenTimeout();
    this.router.navigate(["/login"]);
  }

	clearRefreshTokenTimeout() {
    clearTimeout(this.refreshTokenTimeout);
  }

	handleError(error: HttpErrorResponse) {
    return throwError(error);
  }


}
