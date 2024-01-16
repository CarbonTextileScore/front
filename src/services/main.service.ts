import { Injectable } from "@angular/core";
import { User } from "src/models/User.model";

@Injectable({providedIn: 'root'})
export class MainService {

    private user: User;

    constructor() {
        this.user = new User(1, "Jade", "Christien", 14, 22);
     }

    getUserId(): number{
        return this.user.id;
    }

    isUserLoggedIn(): boolean{
        return false;
    }

}