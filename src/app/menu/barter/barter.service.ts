import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MarketItemDTO } from "../../domain/barter.DTO";
import { environment } from "src/environments/environment.prod";

const apiUrl = environment.API_URL + "api/barter/";

@Injectable({
    providedIn: 'root'
})
export class BarterService {

    constructor(private httpClient: HttpClient) {}

    getMarketItems(): Observable<MarketItemDTO[]>{
        return this.httpClient.get<MarketItemDTO[]>(apiUrl+`marketItems`);
    }

    // getMarketItemsWithKeyword(keyWord:string = ''):Observable<MarketItemDTO[]> {
    //     const url = this.apiUrl + ''; // Faire l'appel API, on verra comment ça marche
    //     return this.httpClient.get<MarketItemDTO[]>(url);
    // }
}