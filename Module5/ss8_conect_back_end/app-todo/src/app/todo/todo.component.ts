import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from "../service/todo.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoGroup = new FormGroup({content: new FormControl('')});

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(todo => {
      this.todos = todo;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    console.log(this.todoGroup.value)
    const todo = this.todoGroup.value;
      this.todoService.save(todo).subscribe(data => {
        this.todoGroup.reset();
        alert("Them moi thanh cong!!!");
        this.ngOnInit();
      });

    }

}
