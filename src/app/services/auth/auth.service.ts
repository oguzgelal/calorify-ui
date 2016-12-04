import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  user() {
    if (localStorage.getItem('user')){ return JSON.parse(localStorage.getItem('user')); }
    return null;
  }
  save(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(data){
    if (data.username=='demo' && data.password=='123'){
      this.save({
        name: 'John Doe',
        username: 'demo',
        email: 'demo@calorify.com',
        fb: 'johndoe',
        avatar: 'http://lorempixel.com/500/500/people'
      });
      return true;
    }
    else{ return false; }
  }

  logout() { localStorage.removeItem('user'); }

}
