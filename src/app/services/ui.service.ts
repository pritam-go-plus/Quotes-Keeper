import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddQuote: boolean = false
  private subject = new Subject()
  constructor() { }
  toggleAddQuote() {
    this.showAddQuote = !this.showAddQuote
    this.subject.next(this.showAddQuote)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
