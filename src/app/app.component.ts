import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SingupComponent } from './component/singup/singup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,LoginComponent,SingupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task_mangemnet_system';
  islogin:string="";
  login:boolean=false;

  // islogin :boolean = (false || window.localStorage.getItem("login")=="true");
constructor() {
  // this.islogin = window.localStorage.getItem("login") 
  // ?? "false"; 
  // if(this.islogin=='true'){
  //   this.login=true;
  // }
  
}

}
