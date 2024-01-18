import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { AuthModel } from "src/models/Auth.model";
import { JWTToken } from "src/models/JWTToken.model";

@Injectable({
	providedIn: 'root'
})
export class MainService {

	private readonly TOKEN_KEY = 'authToken';
  private readonly USER_KEY = 'authUser';

	constructor(
		private cookieService: CookieService
	) {}

	getAuth(): AuthModel{
    return <AuthModel>JSON.parse(this.cookieService.get(this.USER_KEY));
  }

	setAuth(_user: AuthModel){
    this.cookieService.set(this.USER_KEY, JSON.stringify(_user), undefined, '/');
  }

  setToken(_token: JWTToken){
    this.cookieService.set(this.TOKEN_KEY, JSON.stringify(_token), undefined, '/');
  }

  getToken(): JWTToken{
    return <JWTToken>JSON.parse(this.cookieService.get(this.TOKEN_KEY));
  }

	deleteToken() {
    this.cookieService.delete(this.TOKEN_KEY, '/');
  }

	deleteAuth() {
    this.cookieService.delete(this.USER_KEY, '/');
  }

	isLoggedIn(): boolean {
    return this.cookieService.check(this.TOKEN_KEY);
  }

}
