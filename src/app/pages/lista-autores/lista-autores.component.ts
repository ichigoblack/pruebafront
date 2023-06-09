import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { auto } from '@popperjs/core';
import { ObrasComponent } from 'src/app/components/obras/obras.component';
import { Autor } from 'src/app/models/Autor';
import { AuthorService } from 'src/app/services/author.service';
import { LoginService } from 'src/app/services/login.service';
import { ObrasService } from 'src/app/services/obras.service';

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
    private authorService:AuthorService,
    private obrasService:ObrasService,
    private router:Router,
    private modalService:NgbModal 
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

  verObras(autor:any , content:any){
    this.modalService.dismissAll("ok")
    /*this.obrasService.getObrasPorAutor(autor)
    .subscribe((data:any)=>{
      this.autores = data.authors;
      console.log("content ",data)
    });*/
    this.autorInput  = autor;
    this.modalService.open(content, { centered: true, size: 'xs' });
  }


}