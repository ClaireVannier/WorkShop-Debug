import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Task } from '../models/task.model';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Output() newTask: EventEmitter<Task> = new EventEmitter();

  formBuilder = inject(FormBuilder)

  taskForm = this.formBuilder.group({
    content: ['', Validators.required],
    done: [false],
  });

  sendTaskToApp() {
    this.newTask.emit(this.taskForm.value as Task);
    this.taskForm.reset({ content: '', done: false });
  }
}
