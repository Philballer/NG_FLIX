import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie } from '../../interfaces/i-movie';
import { IApiResponse } from '../../interfaces/i-Api-response';
import { ITvShow } from '../../interfaces/i-tvShow';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '8e154c15f61520e817d886ec21621b89';

  constructor(private http: HttpClient) {}

  public getMoviesByType(type: string): Observable<IMovie[]> {
    return this.http
      .get<IApiResponse<IMovie>>(
        `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.results));
  }

  public getTvShowsByType(type: string): Observable<ITvShow[]> {
    return this.http
      .get<IApiResponse<ITvShow>>(
        `${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.results));
  }
}
