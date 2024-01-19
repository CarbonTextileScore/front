import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Action, UserDto } from "src/app/domain/user.dto";
import { environment } from "src/environments/environment";
import { MainService } from "src/services/main.service";

const apiUrl = environment.API_URL;

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
        headers = headers.set('Token', this.mainService.getToken().access);
        return this.httpClient.get<UserDto>(apiUrl + `user/dashboard`,{headers: headers});
    }

    getPunishments(): Observable<Action[]>{
        var headers = new HttpHeaders();
        headers = headers.set('Token', this.mainService.getToken().access);
        return this.httpClient.get<Action[]>(apiUrl + `user/retribution`,{headers: headers});
    }

    // applyPunishment(id: number){
    //     var headers = new HttpHeaders();
    //     headers = headers.set('Token', this.mainService.getToken().access);
    //     return this.httpClient.post<number>(apiUrl + `invoice`, id, {headers: headers});
    //   }

}