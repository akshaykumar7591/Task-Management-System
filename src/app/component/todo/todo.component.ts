import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {  AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toUSVString } from 'node:util';
// import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  // count:number=0;
  localItem:string="";
  islogin:string="";
  login:boolean=false;
   isopen:boolean=false;

   task:any={
    teamMember:'',
    des:'',
    priority:'',
    isComplete:false,
    level:function(){
          if(this.priority ==="High")return 3;
          else if(this.priority ==="Middle")return 2;
          else return 1;
          // console.log(this.priority ==="High")
    }

  }

  todos:any[]=[
    {
      teamMember:"Alice Mayer",
      des:"Call Sam For payments",
      priority:"High",
      isComplete:false,
      level:3
    },
    {
      teamMember:"Kate Moss",
      des:"Make payment to Bluedart",
      priority:"Middle",
      isComplete:false,
      level:2
    },
    {
      teamMember:"Danny McChain",
      des:"Office rent",
      priority:"Low",
      isComplete:false,
      level:1
    },
    {
      teamMember:"Annie Hall",
      des:"Create weekly tasks plan",
      priority:"Low",
      isComplete:false,
      level:1
    }
  ]
  // this.todo.sort((a, b) => a.level - b.level);
 constructor(private router:Router){
  this.localItem = window.localStorage.getItem("todos") 
  ?? " "; 
  this.islogin = window.localStorage.getItem("login") 
  ?? " "; 
  if(localStorage.getItem("todos")==null){
    this.todos=this.todos;

  }
  else{
    
    this.todos=JSON.parse(this.localItem)
  }
  if(this.islogin=='true'){
    this.login=true;
  }
 }
  isopenform(){
    this.isopen=!this.isopen;
  }
  onSubmit(){
    this.isopen=false
    this.todos.push(this.task);
    this.todos.sort((a, b) => b.level - a.level);
    localStorage.setItem("todos",JSON.stringify(this.todos));

    this.todos=JSON.parse(this.localItem)
  }
  ondelete(idx:number){
    console.log(idx)
    this.todos.splice(idx,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  signout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  update(idx:number){
     this.todos[idx].isComplete=true;
     localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
