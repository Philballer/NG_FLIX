import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../interfaces/i-movie';
import { IApiResponse } from '../../interfaces/i-Api-response';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getPopularMovies(): Observable<IApiResponse<IMovie>> {
    return this.http.get<IApiResponse<IMovie>>(
      'https://api.themoviedb.org/3/movie/popular?api_key=8e154c15f61520e817d886ec21621b89'
    );
  }
}
