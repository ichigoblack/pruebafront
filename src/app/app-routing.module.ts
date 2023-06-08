import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'login',
    loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {
    path:'',
    redirectTo:'dashboard/main',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'dashboard/main',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
