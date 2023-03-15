import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent {
  @Output() onAddQuoteClick = new EventEmitter()
  quote_author: string = "Pritam"
  quote_text: string = "Now"
  showAddQuote: boolean
  subscription: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddQuote = value
    })
  }

  saveQuoteClick() {
    console.log('save task clicked', this.quote_author, this.quote_text);

  }

  onSubmit() {
    // if (!this.text || !this.quote_text) {
    //   alert("Add a task !")
    //   return;
    // }
    let newTask = { quote_author: this.quote_author, quote_text: this.quote_text }
    //@todo emit event
    this.onAddQuoteClick.emit(newTask)
    this.quote_author = "Pritam"
    this.quote_text = "All is well"

  }
}
