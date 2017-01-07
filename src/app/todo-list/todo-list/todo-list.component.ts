import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 private todoList:{};

 constructor(private todoService:TodoService){

   }

    getItems(){

      this.todoService.getItems().subscribe(
      list => this.todoList=list,
        error => console.error('Error: '),
        () => console.log('Completed!')
      );
    }

  ngOnInit() {
  }

}
