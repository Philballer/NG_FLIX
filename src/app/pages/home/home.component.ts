import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MovieService } from '../../services/movie-service/movie.service';
import { IMovie } from '../../interfaces/i-movie';
import { Observable } from 'rxjs';
import { ITvShow } from '../../interfaces/i-tvShow';
import { IMovieTvShow } from '../../interfaces/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public popularMovies?: IMovieTvShow[];
  public upcomingMovies$?: Observable<IMovie[]>;
  public topRatedMovies$?: Observable<IMovie[]>;
  public topRatedTvShows$?: Observable<ITvShow[]>;

  constructor(private movieService: MovieService) {}

  public ngOnInit(): void {
    this.movieService.getMoviesByType('popular').subscribe((data) => {
      this.popularMovies = data as unknown as IMovieTvShow[];
    });
    this.upcomingMovies$ = this.movieService.getMoviesByType('upcoming');
    this.topRatedMovies$ = this.movieService.getMoviesByType('top_rated');
    this.topRatedTvShows$ = this.movieService.getTvShowsByType('top_rated');
  }
}
