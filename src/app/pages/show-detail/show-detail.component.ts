import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieType } from '../../cosntants/type-enum';
import { SliderComponent } from '../../components/slider/slider.component';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { TabViewModule } from 'primeng/tabview';
import { posterUrl } from '../../cosntants/images-size';
import {
  IActor,
  IMovieTvShow,
  IMovieTvTrailer,
  IPicture,
} from '../../interfaces/types';
import { YoutubePlayerComponent } from '../../components/youtube-player/youtube-player.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    SliderComponent,
    LoadingSpinnerComponent,
    YoutubePlayerComponent,
    BannerComponent,
    ImageModule,
    CarouselModule,
  ],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  public details$?: Observable<IMovieTvShow>;

  public trailer$?: Observable<IMovieTvTrailer[]>;

  public actors$?: Observable<IActor[]>;

  public similarShows$?: Observable<IMovieTvShow[]>;

  public images$?: Observable<IPicture[]>;

  public isTvShow = false;

  public loading = true;

  public posterUrl = posterUrl;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const type = params.get('type');
      const id = params.get('id');

      if (type === MovieType.TV) this.isTvShow = true;

      if (type && id) {
        const newId = parseInt(id);
        this.images$ = this.movieService.getMovieOrTvImagesById(type, newId);
        this.actors$ = this.movieService.getMovieOrTvCastById(type, newId);
        this.details$ = this.movieService.getMovieOrTvDetailsById(type, newId);
        this.trailer$ = this.movieService.getMovieOrTvTrailersById(type, newId);
        this.similarShows$ = this.movieService.getMovieOrTvSimilarsById(
          type,
          newId
        );

        this.movieService
          .getMovieOrTvDetailsById(type, parseInt(id))
          .subscribe((data) => {
            if (data) this.loading = false;
          });
      }
    });
  }
}
