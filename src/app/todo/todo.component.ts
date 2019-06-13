import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}
let id1 = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<ITodo> = [];

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const { value } = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: id1++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
