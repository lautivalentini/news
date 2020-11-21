import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; 
import { Observable } from 'rxjs';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LastNewsService {

  constructor(private http: HttpClient) { }

  getNews():Observable<any> {
    const path = environment.API_URL + 'top-headlines/' + '?country=ar&apiKey=f4582e25ff974ad79bc1d8c0340b910a';
    return this.http.get(path);
  }

  getNewsUs(): Observable<any> {
    const path = environment.API_URL + 'top-headlines/' + '?country=us&apiKey=f4582e25ff974ad79bc1d8c0340b910a';
    return this.http.get(path);
  }

  saveNews(article): Observable<any> {
    const path = environment.API_URL + 'top-headlines/' + '?sources=' + article.source.id + '&apiKey=f4582e25ff974ad79bc1d8c0340b910a';
    return this.http.get(path);
  }

}
