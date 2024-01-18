import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MarketItemDTO } from "../../domain/barter.DTO";
import { environment } from "src/environments/environment.prod";
import { MainService } from "src/services/main.service";

const apiUrl = environment.API_URL + "api/barter/";

@Injectable({
    providedIn: 'root'
})
export class BarterService {

    constructor(
        private httpClient: HttpClient,
        private mainService: MainService
        ) {}

    getMarketItems(): Observable<MarketItemDTO[]>{
        var headers = new HttpHeaders();
        headers = headers.set('Token', this.mainService.getToken().access);  
        return this.httpClient.get<MarketItemDTO[]>(apiUrl+`marketItems`, {headers: headers});
    }

}