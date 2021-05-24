import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  //URL of Server API Rest
  url = 'https://villa-jaragua-api.herokuapp.com/api/v1'


  //Methods to get Sectors data
  
  //Get All Sectors
  getAllSectors() {
    return this.http.get<any>(`${this.url}/sectors`)
  }
  
  //Get Sector by Id
  getSectorById(id: string) {
    return this.http.get<any>(`${this.url}/sectors/${id}`)    
  }



  //Methos to get Streets Data

  getStreetsBySectorId(id: string) {
    return this.http.get<any>(`${this.url}/sectors/streets/${id}`)
  }
}
