import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = 'https://villa-jaragua-api.herokuapp.com/api/v1'

  getAllSectors() {
    return this.http.get<any>(`${this.url}/sectors`)
  }
}
