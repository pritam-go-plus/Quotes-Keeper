import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from 'src/app/mock.quote';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})

export class QuoteItemComponent {
  @Input() quote: Quote
  @Output() deleteTaskClick = new EventEmitter()
  @Output() completedTaskClick = new EventEmitter()

  faTimes = faTimes;


  onDeleteTaskClick(quote: Quote, e: any) {
    e.stopPropagation()
    console.log("In task item")
    this.deleteTaskClick.emit(quote)
  }
}
