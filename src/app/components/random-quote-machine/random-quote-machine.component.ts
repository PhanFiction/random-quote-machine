import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/interface/quote';
import { Observable } from 'rxjs';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-random-quote-machine',
  templateUrl: './random-quote-machine.component.html',
  styleUrls: ['./random-quote-machine.component.css']
})
export class RandomQuoteMachineComponent implements OnInit{
  data$: Observable<Quote[]> = new Observable<Quote[]>();
  quotes: Quote[] = [];
  quote: Quote | undefined;
  index = 0;

  constructor(private quoteService: QuoteService) {}

  nextQuote(): void {
    this.index++;
    if(this.index > this.quotes.length-1) {
      this.index = 0;
      this.quote = this.quotes[0];
    }else {
      this.quote = this.quotes[this.index];
    }
  }

  ngOnInit(): void {
    this.data$ = this.quoteService.getQuotes();
    this.data$.subscribe(item => {
      this.quotes = item;
      this.quote = item[this.index];
    });
  }
}