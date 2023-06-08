import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObraRandom } from 'src/app/models/ObraRandom';
import { LoginService } from 'src/app/services/login.service';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  obrasRandom:ObraRandom[] = [];


  constructor(
    private obrasService:ObrasService,
    private loginService:LoginService,
    private router:Router
  ){
      this.obrasService.getObrasRandom()
            .subscribe((obras:any)=>{
              this.obrasRandom = obras;
            })
  }

  irFavoritas(){
    this.router.navigateByUrl('/dashboard/main/obrasfavoritas');
  }

  irAutores(){
    this.router.navigateByUrl('/dashboard/main');
  }

  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login/login');
  }
}
