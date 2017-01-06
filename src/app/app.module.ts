import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import {TodoListModule} from './todo-list/todo-list.module';
import {TodoService} from './todo.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoListModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
