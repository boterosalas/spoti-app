import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotifyService.getArtista(id)
      .subscribe(data => {
        this.artista = data;
        this.loading = false;
      })
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id)
    .subscribe(data=>{
      this.topTracks = data;
    })
  }

  ngOnInit(): void {
  }

}
