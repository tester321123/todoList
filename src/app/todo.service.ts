import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response} from '@angular/http';



@Injectable()
export class TodoService implements OnInit {
todoList:Array<any>=new Array({content:"Go shopping", done:false},{content:"Go Sleeping", done:true},
    {content:"Go eating", done:false});
    constructor(private http:Http) {
 }

 private baseUrl: string = 'http://localhost:3000/todolist';
    getItems(): Observable<{}>{
       
    let people$ = this.http
      .get(`${this.baseUrl}`).map(response => response.json());
      return people$;
  }

 ngOnInit(){
        
 }
}
