import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  mensajeError: string;

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.spotifyService.getToken()
    .subscribe(data=>{
      this.spotifyService.setToken(data['access_token']);
      this.spotifyService.getNewReleases()
        .subscribe((data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, errorServicio => {
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
        })
    })

  }


  ngOnInit(): void {
  }

}
