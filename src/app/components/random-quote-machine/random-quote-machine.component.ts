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

  quotes!: Observable<Quote[]>;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe(data => console.log(data));
  }
}
