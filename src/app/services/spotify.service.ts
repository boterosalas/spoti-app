import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Propiedades
  urlNewReleases: string = 'https://api.spotify.com/v1/browse/new-releases';
  urlArtist: string = 'https://api.spotify.com/v1/search';
  token:string = 'BQBZWyvjAe_Y0vRUD0UlrWOt5m6m5KwKOqxWin0Jqqvd3d8lv5cPSNCg9VfPiuhxnGc01zVWMpH8cTEDHP0';

  constructor(
    private http: HttpClient
  ) {
    
  }

  getNewReleases() {
    const headers= new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
    return this.http.get(this.urlNewReleases,{headers});
  }

  getArtista(termino:string){
    const headers= new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
    return this.http.get(`${this.urlArtist}?q=${termino}&type=artist&market=co`,{headers});
  }



}
