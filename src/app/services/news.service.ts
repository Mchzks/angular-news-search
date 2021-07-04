import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(params: any): Observable<any> {
    const token = "###############################";
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + params.country + '&category=' + params.category + '&apiKey=' + token;

    return this.http.get(URL);
  }
}
