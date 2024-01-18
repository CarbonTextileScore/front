import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from "../app/domain/user.dto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUserIdentity(): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.apiUrl}/user/identity`);
  }
}
