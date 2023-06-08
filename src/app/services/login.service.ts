import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public usuario!:String;

  constructor() {
    this.usuario = localStorage.getItem('user') || "";
  }

  login(user:string){
    localStorage.setItem('user',user);
  }

  logout(){
    localStorage.removeItem('user');
  }

  isAutenticated(){
    if(localStorage.getItem('user') == null){
      return false;
    }

    return true;
  }

}