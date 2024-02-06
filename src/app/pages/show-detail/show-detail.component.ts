import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../interfaces/i-movie';
import { ITvShow } from '../../interfaces/i-tvShow';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieType } from '../../cosntants/type-enum';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  public details$?: Observable<IMovie | ITvShow>;

  public isTvShow = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const type = params.get('type');
      const id = params.get('id');

      if (type === MovieType.TV) this.isTvShow = true;

      if (type && id)
        this.details$ = this.movieService.getMovieOrTvDetailsById(
          type,
          parseInt(id)
        );
    });
  }
}
