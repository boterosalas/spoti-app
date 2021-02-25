import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  buscar(termino: string) {
    console.log(termino);
    this.spotifyService.getArtista(termino)
      .subscribe((data: any) => {
        this.artistas = data.artists.items;
        console.log(this.artistas);
      })
  }

  ngOnInit(): void {
  }

}
