import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  public static id:number=0;
  fid:number;
  @Input()todoContent:string;
  @Input() done:boolean;
  constructor() { }

  ngOnInit() {
   TodoItemComponent.id++;
   this.fid= TodoItemComponent.id;
   console.log(TodoItemComponent.id);
  }

}
