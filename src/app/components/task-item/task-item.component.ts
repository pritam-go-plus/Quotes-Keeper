import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/mock.task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task
  @Output() deleteTaskClick = new EventEmitter()
  @Output() completedTaskClick = new EventEmitter()
  
  faTimes = faTimes;

  onCompletedTaskClick(task:Task){
    let newTask = {...task,completed : !task.completed}
    this.completedTaskClick.emit(newTask)
  }

  onDeleteTaskClick(task: Task) {
    console.log("In task item")
    this.deleteTaskClick.emit(task)
  }
}
