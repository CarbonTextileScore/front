import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { VideoCategoryModel } from "src/models/VideoCategory.model";
import { TrainingDTO } from "../../domain/training.DTO";
import { Observable } from "rxjs";
import { MainService } from "src/services/main.service";

const apiUrl = environment.API_URL;


@Injectable({providedIn: 'root'})
export class TrainingService {

    constructor(
        private httpClient: HttpClient,
        private mainService: MainService
    ) {}

    getCategories(): Observable<VideoCategoryModel[]>{
        var headers = new HttpHeaders();
        headers = headers.set('Token', this.mainService.getToken().access);   
        return this.httpClient.get<VideoCategoryModel[]>(apiUrl+`training/categories`, {headers: headers});
    }

    getVideos(): Observable<TrainingDTO[]>{
        var headers = new HttpHeaders();
        headers = headers.set('Token', this.mainService.getToken().access);   
        return this.httpClient.get<TrainingDTO[]>(apiUrl+`training/videos`, {headers: headers});
    }

}