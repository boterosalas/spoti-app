import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Propiedades
  urlNewReleases: string = 'https://api.spotify.com/v1/browse/new-releases';
  urlArtist: string = 'https://api.spotify.com/v1/search';
  // token: string = 'BQAUUcLJVIWAcMAQQkcdJ_6y5LKaKH0aTb6yKYAADS0oQ7bktKs0XYkg5ihue04WW1gt59oGX9zEaWanOxQ';
  token:string;
  urlToken: string = 'https://spoti-app2021.herokuapp.com/spotify/a8665f27a8c74901a5a6b670f03b4b58/1a76d94644a64a4a8f800e05d1a2f322';
  urlAlbum = 'https://api.spotify.com/v1'

  loading: boolean;
  error: boolean;
  prueba: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    
  }

  getAlbum(id:string){
    return this.getQuery(`albums/${id}`)
  }

  setToken(token:string){
    this.token = token;
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums']['items']));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&market=co`)
      .pipe(map(data => data['artists']['items']))
  }

  getArtista(artistaId: string) {
    return this.getQuery(`artists/${artistaId}`);
  }

  getToken(){
        return this.http.get(this.urlToken);
  }

  getTopTracks(artistaId: string) {
    return this.getQuery(`artists/${artistaId}/top-tracks?country=co`)
      .pipe(map(data => data['tracks']))
  }



}
