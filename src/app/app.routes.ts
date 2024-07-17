import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SingupComponent } from './component/singup/singup.component';
import { TodoComponent } from './component/todo/todo.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';

export const routes: Routes = [
    
    {
        path:'' ,
         component:TodoComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'todo',
        component:TodoComponent
    },
    {
        path:"sign-up", 
        component:SingupComponent
    },
    {
        path:'forget-password',
        component:ForgetPasswordComponent
    }
];
