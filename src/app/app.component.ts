import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba_angular';
  username:string = "";
  password:string = "";

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Aquí puedes realizar acciones adicionales después de iniciar sesión exitosamente
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Inicio de sesión fallido');
    }
  }
}