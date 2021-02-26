import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums = {
    nombre: 'Prueba'
  }

  album: any = {};
  canciones: any[] = [];
  loading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { 
    this.router.params.subscribe(params => {
      this.getAlbum(params['id']);
    })
  }

  getAlbum(id: string) {
    this.spotifyService.getAlbum(id)
      .subscribe(data => {
        this.album = data;
        this.canciones = data['tracks'].items
        this.loading = false;
      })
      
  }

  ngOnInit(): void {
  }

}
