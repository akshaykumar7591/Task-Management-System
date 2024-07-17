import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  studentObj:any={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    isAcceptTerms:false

  }
  constructor(private router: Router){

  }
  onSubmit(){
    this.router.navigateByUrl("/login");
   }

}
