import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() objetoArr: any[];
  @Input() artistas: boolean = true;

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  visitarUrl(objeto: string) {
    let id: string = objeto['id'];
    if (objeto['type'] === 'artist') {
      this.router.navigate(['/artista', id])
    } else {
      this.router.navigate(['/album',id])
    }
  }

  verArtista(id: number) {
    this.router.navigate(['/artista', id])
  }

}
