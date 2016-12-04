import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

declare var sweetAlert: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user;

  constructor(public auth: AuthService) {
    this.user = auth.user();
  }

  ngOnInit() {

  }

}
