import { Component } from '@angular/core';




@Component({
    selector: 'app-contador',
    template:`

    <h1>{{titulo}}</h1>
    <span> La base es : <strong> {{base}}</strong></span>

    <button (click)="acumular('suma');"> +1</button>

    <span> {{numero}}</span>

    <button (click)="acumular('resta');"> -1</button>
    
    `


    
    
})
export class contadorComponent{

    titulo:string = 'Contador app';
    numero:number = 10;
    base:number = 5;
  
  acumular(operacion:string)
  {
    if(operacion == 'suma')
      this.numero+=this.base;
    else if(operacion == 'resta')
      this.numero-=this.base;
  
  
  }

}