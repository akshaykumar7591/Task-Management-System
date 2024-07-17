import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  studentObj:any={
    email:'',
    password:'',
    isAcceptTerms:false
  }
  constructor(private router: Router){

  }
  onSubmit(){
    localStorage.setItem("login",'true');
   this.router.navigateByUrl("/todo");
  }
}
