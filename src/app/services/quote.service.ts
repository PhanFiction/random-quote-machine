import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from 'src/interface/quote';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  items: Quote[] = [];
  constructor(private http: HttpClient) {}
  
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(environment.api);
  }
}
