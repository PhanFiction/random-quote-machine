import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from 'src/interface/quote';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes: Quote[] = [];
  constructor(private http: HttpClient) {}
  
  getQuotes() {
    return this.http.get<Quote[]>(environment.api);
  }
}
