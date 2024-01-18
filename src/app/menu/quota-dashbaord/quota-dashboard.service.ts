import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDto } from "src/app/domain/user.dto";
import { environment } from "src/environments/environment";
import { MainService } from "src/services/main.service";

const apiUrl = environment.API_URL + "user/dashboard";

@Injectable({
    providedIn: 'root'
})
export class QuotaDashboardService {

    constructor(
        private httpClient: HttpClient,
        private mainService: MainService
    ) {}

    getData(): Observable<UserDto>{

        var headers = new HttpHeaders();
        console.log(this.mainService.getToken().access);
        headers = headers.set('Token', this.mainService.getToken().access);
        console.log(headers);
        return this.httpClient.get<UserDto>(apiUrl,{headers: headers});
    }

}