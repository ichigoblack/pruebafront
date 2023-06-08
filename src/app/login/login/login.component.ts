import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(
    private router:Router,
    private loginService:LoginService
) { }

  ngOnInit(): void {
    this.loginService.logout();
  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log("entro")
      this.loginService.login('admin');
      this.router.navigate(['/dashboard/main']);
    }else{
      this.router.navigateByUrl('');
    }
  }

}