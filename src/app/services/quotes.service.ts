import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import Quotes, { Quote } from 'src/app/mock.quote';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = "http://localhost:3000/quotes"
  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    // const tasks = of(TASKS)
    return this.http.get<Quote[]>(this.apiUrl)
  }
  addQuote(newTask: Quote) {
    return this.http.post(this.apiUrl, newTask, httpOptions);
  }

  completedQuote(task: Quote) {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.patch(url, task, httpOptions);
  }

  deleteQuote(task: Quote) {
    console.log("deleting task")
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete(url, httpOptions);
  }
}
