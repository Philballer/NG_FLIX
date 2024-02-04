import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../interfaces/i-movie';
import { IApiResponse } from '../../interfaces/i-Api-response';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '8e154c15f61520e817d886ec21621b89';

  constructor(private http: HttpClient) {}

  public getPopularMovies(): Observable<IApiResponse<IMovie>> {
    return this.http.get<IApiResponse<IMovie>>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }
}
