import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http :HttpClient) { }
  loadJson(json : any){
    return(this.http.get(json))
  }
}
