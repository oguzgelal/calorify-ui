import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

declare var sweetAlert: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
    this.user = this.auth.user();
    if (!this.user){ this.user = {}; }
    if (!this.user.birthyear){ this.user.birthyear = ''; }
    if (!this.user.height){ this.user.height = ''; }
    if (!this.user.weight){ this.user.weight = ''; }
    if (!this.user.gender){ this.user.gender = ''; }
    if (!this.user.email){ this.user.email = ''; }
    if (!this.user.username){ this.user.username = ''; }
  }

  submit() {
    this.auth.save(this.user);
    this.router.navigate(['/']);
    sweetAlert("Success!", "You settings saved successfully.", "success")
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
