import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import {HttpClient, HttpHeaders } from "@angular/common/http"
import TASKS, { Task } from 'src/app/mock.task';

const httpOptions = {
  headers : new HttpHeaders({
    "Content-Type" : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = "http://localhost:3000/tasks"
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS)
    return this.http.get<Task[]>(this.apiUrl)
  }
  completedTask(task:Task){
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.patch(url,task,httpOptions);
  }
  deleteTask(task:Task){
    console.log("deleting task")
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete(url);
  }
}
