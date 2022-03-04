import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortService {
  private API_URL: string = 'https://api.shrtco.de/v2/shorten?url=';

  constructor(private http: HttpClient) {}

  shortLink(link: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${link}`);
  }
}
