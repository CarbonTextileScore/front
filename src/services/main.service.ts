import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/models/User.model";

@Injectable({providedIn: 'root'})
export class MainService {

    private user: User;

    constructor(
        private httpClient: HttpClient
    ) {
        this.user = new User(1, "Jade", "Christien", 14, 22);
     }

    getUserId(): number{
        return this.user.id;
    }

    isUserLoggedIn(): boolean{
        return true;
    }

    login(email: string, password: string){

    }


}