import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie } from '../../interfaces/i-movie';
import { IApiResponse } from '../../interfaces/i-Api-response';
import { ITvShow } from '../../interfaces/i-tvShow';
import {
  CreditsDto,
  IActor,
  IMovieTvShow,
  IMovieTvTrailer,
  IPicture,
} from '../../interfaces/types';

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

  public getMovieOrTvDetailsById(
    type: string,
    id: number
  ): Observable<IMovieTvShow> {
    return this.http.get<IMovieTvShow>(
      `${this.apiUrl}/${type}/${id}?api_key=${this.apiKey}`
    );
  }

  public getMovieOrTvTrailersById(
    type: string,
    id: number
  ): Observable<IMovieTvTrailer[]> {
    return this.http
      .get<IApiResponse<IMovieTvTrailer>>(
        `${this.apiUrl}/${type}/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.results));
  }

  public getMovieOrTvImagesById(
    type: string,
    id: number
  ): Observable<IPicture[]> {
    return this.http
      .get<IApiResponse<IPicture>>(
        `${this.apiUrl}/${type}/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.backdrops));
  }

  public getMovieOrTvCastById(type: string, id: number): Observable<IActor[]> {
    return this.http
      .get<CreditsDto>(
        `${this.apiUrl}/${type}/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.cast));
  }

  public getMovieOrTvSimilarsById(
    type: string,
    id: number
  ): Observable<IMovieTvShow[]> {
    return this.http
      .get<IApiResponse<IMovieTvShow>>(
        `${this.apiUrl}/${type}/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.results));
  }

  public searchForMovieOrTvByName(
    type: string,
    query: string
  ): Observable<IMovieTvShow[]> {
    return this.http
      .get<IApiResponse<IMovieTvShow>>(
        `${this.apiUrl}/search/${type}?query=${query}&api_key=${this.apiKey}`
      )
      .pipe(map((response) => response.results));
  }
}
