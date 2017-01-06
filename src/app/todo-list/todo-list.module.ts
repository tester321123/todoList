import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoItemModule} from '../todo-item/todo-item.module';


@NgModule({
  imports: [
    CommonModule,
    TodoItemModule
  ],
  declarations: [TodoListComponent],
  exports:[TodoListComponent]
})
export class TodoListModule { 

}
