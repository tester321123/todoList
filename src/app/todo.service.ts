import { Injectable, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';




@Injectable()
export class TodoService implements OnInit {
todoList:Array<any>=new Array({content:"Go shopping", done:false},{content:"Go Sleeping", done:true},
{content:"Go eating", done:false});
constructor(private http:Http) {


 }

 private baseUrl: string = '/todolist';

   getItems(): Observable<{}>{
       
    let people$ = this.http
      .get(`${this.baseUrl}`).map(response => response.json());
   
      return people$;
  }

 ngOnInit(){
        
 }
}
