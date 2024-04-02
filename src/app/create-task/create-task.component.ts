import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';
import {
  Validators,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Output() newTask: EventEmitter<Task> = new EventEmitter();

  taskForm = new FormGroup({
    content: new FormControl('', Validators.required),
    done: new FormControl(false),
  });

  sendTaskToApp() {
    this.newTask.emit(this.taskForm.value as Task);
    this.taskForm.reset({ content: '', done: false });
  }
}
