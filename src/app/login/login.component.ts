import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData;
  public loginError: boolean = false;

  constructor(public auth: AuthService) {
    this.loginData = { username: '', password: '' };
  }

  ngOnInit() {
  }

  login() {
    let self = this;
    let loggedIn = self.auth.login(this.loginData)
    if (loggedIn){ console.log('logged in'); console.log(self.auth.user()); }
    else {
      self.loginError = true;
      setTimeout(function(){ self.loginError = false; },3000);
    }
  }

}
