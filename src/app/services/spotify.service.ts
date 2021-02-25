import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Propiedades
  urlNewReleases: string = 'https://api.spotify.com/v1/browse/new-releases';
  urlArtist: string = 'https://api.spotify.com/v1/search';
  token: string = 'BQDUCuTUJywOiTCTLDlzCw-ZRjWQAJ5_o424lExfAn11qJDS-Q9D4CvmsHcTrG175nqzyx5H7IsA_fjD1bM';

  constructor(
    private http: HttpClient
  ) {

  }

  getQuery(query:string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(URL,{headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums']['items']));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&market=co`)
      .pipe(map(data => data['artists']['items']))
  }



}
