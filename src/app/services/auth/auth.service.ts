import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }


  user() {
    if (localStorage.getItem('user')){ return JSON.stringify(localStorage.getItem('user')); }
    return null;
  }
  save(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(data){
    if (data.username=='demo' && data.password=='calorify123'){
      this.save({
        username: 'demo',
        email: 'demo@calorify.com',
        name: 'John Doe'
      });
      return true;
    }
    else{ return false; }
  }

  logout() { this.save(null); }

}
