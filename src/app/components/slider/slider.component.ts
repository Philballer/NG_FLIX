import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/i-movie';
import { MovieService } from '../../services/movie-service/movie.service';
import { CommonModule } from '@angular/common';
import { RoundUpPipe } from '../../pipes/round-up.pipe';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { imageUrl } from '../../cosntants/images-size';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RoundUpPipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('2s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  public popularMovies: IMovie[] | undefined;

  public startIndex: number = 0;

  public imageUrl = imageUrl.original;

  public constructor(private movieService: MovieService) {
    this.movieService
      .getPopularMovies()
      .subscribe((response) => (this.popularMovies = response.results));
  }

  public ngOnInit(): void {
    setInterval(() => {
      this.startIndex++;
      if (this.startIndex === 15) this.startIndex = 0;
    }, 5000);
  }
}
