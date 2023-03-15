import { Component } from '@angular/core';
import Quotes, { Quote } from 'src/app/mock.quote';
import { QuotesService } from 'src/app/services/quotes.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  constructor(private quotesService: QuotesService) { }

  quotes: Quote[] = []

  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe((quotes) => {
      return this.quotes = quotes
    })
  }

  addQuote(quote: Quote) {
    quote.id = new Date().getTime()
    console.log("In tasks", quote);

    // this.tasks.push(newTask)
    this.quotesService.addQuote(quote).subscribe((quote: any) => {
      // newTask.id = this.tasks.length
      console.log("after adding", quote)
      this.quotes.push(quote)
    })
  }

  completedQuote(quote: Quote) {
    this.quotesService.completedQuote(quote).subscribe(() => {
      this.quotes = this.quotes.map((q) => {
        if (q.id === quote.id) {
          q = quote
          console.log(q);
        }
        return q
      })
    })
  }

  deleteQuote(quote: Quote) {
    console.log('in tasks - parent');
    this.quotesService.deleteQuote(quote).subscribe(() => {
      this.quotes = this.quotes.filter((q) => q.id !== quote.id)
    })
  }
}
