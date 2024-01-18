import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MarketItemDTO } from "./barter.DTO";
import { environment } from "src/environments/environment.prod";

@Injectable({providedIn: 'root'})

export class BarterService {
    private apiUrl = environment.API_URL + "api/barter/";

    constructor(private httpClient: HttpClient) {}

    getMarketItems():Observable<MarketItemDTO[]> {
        const url = this.apiUrl + ''; // Faire l'appel API, on verra comment ça marche
        return this.httpClient.get<MarketItemDTO[]>(url);
    }

    getMarketItemsWithKeyword(keyWord:string = ''):Observable<MarketItemDTO[]> {
        const url = this.apiUrl + ''; // Faire l'appel API, on verra comment ça marche
        return this.httpClient.get<MarketItemDTO[]>(url);
    }
}