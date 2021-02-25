import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() objetoArr: any[];
  @Input() artistas: boolean = true;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  visitarUrl(objeto:number){
    let id:number;
    if(objeto['type']==='artist'){
      id = objeto['id']
      this.router.navigate(['/artista',id])
    }else{
      // id = objeto['artists'][0]['id']
      console.log('Es un album');
      
    }
    console.log(objeto);
    // this.router.navigate(['/artista',objeto])
  }

  verArtista(id:number){
    this.router.navigate(['/artista',id])
  }

}
