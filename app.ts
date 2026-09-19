import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo: string = "Luz Osorno";

  duplicanumero(num: number): number { 
    return num * 2;
  }

  // El objeto debe ir DENTRO de la clase App
  pelicula = {
    titulo: "el padrino",
    anio: 1972,
    genero: "crimen/drama",
    fechalanzamiento: new Date(), // Date va con D mayúscula
    precio: 345,
  };
}