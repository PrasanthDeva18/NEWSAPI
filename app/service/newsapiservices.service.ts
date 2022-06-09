import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f62a61d815214eb8ab23b4ad4ca98c13";


  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}