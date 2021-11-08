import { Component } from "@angular/core";

@Component({
    selector:'my-todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.css']

})
export class TodoComponent{
todoone: string  ="projet 1";
todotwo: string  ="projet 2";
todothree: string  ="projet 3";
todofour: string  ="projet 4";



// todos: string[] =["projet t1","projet t2","projet t3", "projet t4","projet t5","projet t6"];
// }
todos = [ 
{
    todoName : "projet 1 ",
    todoStatus: true,
    image:"http://placehold.it/150"
},
{
    todoName : "projet 2 ",
    todoStatus: false,
    image:"http://placehold.it/150"
},
{
    todoName : "projet 3 ",
    todoStatus: true,
    image:"http://placehold.it/150"
},
{
    todoName : "projet 4 ",
    todoStatus: false,
    image:"http://placehold.it/150"
},

];

onchangeStatus(i:number){
    this.todos[i].todoStatus= ! this.todos[i].todoStatus;


}

}