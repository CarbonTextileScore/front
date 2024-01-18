import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDto } from "src/app/domain/user.dto";
import { environment } from "src/environments/environment";

const apiUrl = environment.API_URL + "api/dashboard/";

@Injectable({
    providedIn: 'root'
})
export class QuotaDashboardService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getData(): Observable<UserDto>{
        return this.httpClient.get<UserDto>(apiUrl);
    }

}