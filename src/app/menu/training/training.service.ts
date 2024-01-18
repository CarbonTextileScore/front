import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { VideoCategoryModel } from "src/models/VideoCategory.model";
import { TrainingDTO } from "../../domain/training.DTO";
import { Observable } from "rxjs";

const apiUrl = environment.API_URL + "api/training/";


@Injectable({providedIn: 'root'})
export class TrainingService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getCategories(): Observable<VideoCategoryModel[]>{
        return this.httpClient.get<VideoCategoryModel[]>(apiUrl+`categories`);
    }

    getVideos(): Observable<TrainingDTO[]>{
        return this.httpClient.get<TrainingDTO[]>(apiUrl+`videos`);
    }

}