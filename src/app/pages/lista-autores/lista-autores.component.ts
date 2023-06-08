import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { auto } from '@popperjs/core';
import { ObrasComponent } from 'src/app/components/obras/obras.component';
import { Autor } from 'src/app/models/Autor';
import { AuthorService } from 'src/app/services/author.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit{

  public autores:string[] = [];
  public showModal = false;
  public cargando = true;
  public autorInput = "";

  constructor(
    private loginService:LoginService,
    private modalService: NgbModal,
    private authorService:AuthorService,
    private router:Router
  ){

  }
  
  ngOnInit(): void {

    if(!this.loginService.isAutenticated()){
      this.router.navigateByUrl("/login/login");
    }
    
    this.authorService.getAutores()
      .subscribe((data:any)=>{
          this.autores = data.authors;
    });
    this.cargando = false;
  }

  verObras(autor:string , content:any){
    this.autorInput  = autor;

    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{
    }));
    
  }

}
