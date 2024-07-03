import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChallengeEncriptador';

  valorText:string  = ''
  palabraEncriptada:string = ''

  encrypt(){
    let palabra = this.valorText;
      // Convertir las letras según las reglas dadas
      palabra = palabra.replace(/e/g, 'enter');
      palabra = palabra.replace(/i/g, 'imes');
      palabra = palabra.replace(/a/g, 'ai');
      palabra = palabra.replace(/o/g, 'ober');
      palabra = palabra.replace(/u/g, 'ufat');
  
      console.log(palabra)
      
    this.palabraEncriptada = palabra
  }


  decrypt() {
    let palabraEncriptada = this.valorText; // Obtener la palabra encriptada original
  
    // Aplicar los reemplazos inversos secuencialmente
    palabraEncriptada = palabraEncriptada.replace(/enter/g, 'e');
    palabraEncriptada = palabraEncriptada.replace(/imes/g, 'i');
    palabraEncriptada = palabraEncriptada.replace(/ai/g, 'a');
    palabraEncriptada = palabraEncriptada.replace(/ober/g, 'o');
    palabraEncriptada = palabraEncriptada.replace(/ufat/g, 'u');
  
    console.log(palabraEncriptada); // Mostrar la palabra desencriptada en la consola
    this.palabraEncriptada = palabraEncriptada
    // return palabraEncriptada; // Devolver la palabra desencriptada
  }

  copiarTexto() {
    // Selección del texto dentro del elemento <p>
    navigator.clipboard.writeText(this.palabraEncriptada)
    .then(() => {
      console.log('Texto copiado al portapapeles:', this.palabraEncriptada);
      alert('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al intentar copiar al portapapeles:', err);
      alert('No se pudo copiar el texto al portapapeles');
    });
  }

}
