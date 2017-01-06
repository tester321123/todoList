import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoItemComponent],
  exports:[TodoItemComponent]
})
export class TodoItemModule { }
