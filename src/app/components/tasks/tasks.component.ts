import { Component } from '@angular/core';
import TASKS, { Task } from 'src/app/mock.task';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private tasksService: TasksService) { }

  tasks: Task[] = []
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      return this.tasks = tasks
    })
  }

  completedTask(newTask:Task){ 
    this.tasksService.completedTask(newTask).subscribe(()=>{
      this.tasks = this.tasks.map((t)=>{
        if (t.id===newTask.id) {
          t = newTask
          console.log(t);
        }
        return t
      })
    })
  }

  deleteTask(task:Task){
    console.log('in tasks - parent');
    this.tasksService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t)=>t.id!==task.id)
    })
  }
}
