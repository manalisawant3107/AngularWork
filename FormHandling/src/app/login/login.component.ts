import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any = "";
  password: any = "";

  login(myForm: any) {
    console.log(myForm.value);


  }

  abc() {
    console.log(this.username);
    console.log(this.password);

    alert(this.username + this.password);
  }
}
