import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() filteredTaskList!: Task[];

  message: string = '';

  onMouseEnter(task: Task) {
    task.showMessage = true;
  }

  onMouseLeave(task: Task) {
    task.showMessage = false;
  }

  toggleDone(task: Task): void {
    task.done = !task.done;
  }

  deleteTask(index: number) {
    this.filteredTaskList.splice(index, 1);
  }
}
