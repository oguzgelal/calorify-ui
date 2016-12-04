import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

declare var sweetAlert: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData;

  constructor(public auth: AuthService, public router: Router) {
    this.loginData = { username: '', password: '' };
  }

  ngOnInit() {
  }

  login() {
    let self = this;
    let loggedIn = self.auth.login(this.loginData)
    if (loggedIn){
      console.log('logged in');
      console.log(self.auth.user());
      this.router.navigate(['/']);
    }
    else {
      if (this.loginData.username === '' || this.loginData.password === ''){ sweetAlert('Oops...', 'Fields cannot be left empty!', 'error'); }
      else{ sweetAlert('Oops...', 'Invalid username and/or password!', 'error'); }
    }
  }

}
