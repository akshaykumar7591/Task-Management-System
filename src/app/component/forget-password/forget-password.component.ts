import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  studentObj:any={
    email:'',
    password:''
  }

  constructor(private router: Router){

  }
  onSubmit(){
    this.router.navigateByUrl("/login");
   }

}
