import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MovieService } from '../../services/movie-service/movie.service';
import { IMovie } from '../../interfaces/i-movie';
import { Observable } from 'rxjs';
import { ITvShow } from '../../interfaces/i-tvShow';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public upcomingMovies$?: Observable<IMovie[]>;
  public topRatedMovies$?: Observable<IMovie[]>;
  public topRatedTvShows$?: Observable<ITvShow[]>;

  constructor(private movieService: MovieService) {}

  public ngOnInit(): void {
    this.upcomingMovies$ = this.movieService.getMoviesByType('upcoming');
    this.topRatedMovies$ = this.movieService.getMoviesByType('top_rated');
    this.topRatedTvShows$ = this.movieService.getTvShowsByType('top_rated');
  }
}
