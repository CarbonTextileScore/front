import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDto} from "../app/domain/user.dto";
import {AuthorityDto} from "../app/domain/authority.dto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(dto: AuthorityDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, dto);
  }

  getUserIdentity(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.apiUrl}/user/${id}/identity`);
  }
}
