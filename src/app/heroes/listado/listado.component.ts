import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.splice(this.heroes.length-1, this.heroes.length).toString()
    console.log(this.heroes.length -1)
  
  }

}
