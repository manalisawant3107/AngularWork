import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username='';
  password='';

  constructor(private r:Router){

  }

  login(){
    if(this.username==='manali' && this.password==='123'){
      //navigate to home
      this.r.navigate(['/home']);
    }else{
      //navigate to login page
      this.r.navigate(['/login']);
    }
  }
}
