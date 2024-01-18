import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MarketItemDTO } from "./barter.DTO";

@Injectable({providedIn: 'root'})

export class BarterService {
    private apiUrl = '';

    constructor(private httpClient: HttpClient) {}

    getMarketItems():Observable<MarketItemDTO[]> {
        // Il faudra peut-être un paramètre
        const url = ''; // Faire l'appel API, on verra comment ça marche
        return this.httpClient.get<MarketItemDTO[]>(url);
    }

    getMarketItemsWithKeyword(keyWord:string = ''):Observable<MarketItemDTO[]> {
        const url = this.apiUrl + ''; // Faire l'appel API, on verra comment ça marche
        return this.httpClient.get<MarketItemDTO[]>(url);
    }
}