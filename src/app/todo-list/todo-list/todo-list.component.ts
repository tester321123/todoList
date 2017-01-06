import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 private todoList:Array<any>;

 constructor(private todoService:TodoService){
       this.todoList=todoService.todoList;

    }

    getItems(){

      this.todoService.getItems().subscribe(
        list => console.log(list),
        error => console.error('Error: '),
        () => console.log('Completed!')
      );
    }

  ngOnInit() {
  }

}
