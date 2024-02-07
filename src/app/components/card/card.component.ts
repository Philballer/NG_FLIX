import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/i-movie';
import { CommonModule } from '@angular/common';
import { RoundUpPipe } from '../../pipes/round-up.pipe';
import { posterUrl } from '../../cosntants/images-size';
import { ITvShow } from '../../interfaces/i-tvShow';
import { RouterLink } from '@angular/router';
import { MovieType } from '../../cosntants/type-enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RoundUpPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  public movie?: IMovie;

  @Input()
  public tvShow?: ITvShow;

  @Input()
  public isTvShow = false;

  public posterUrl = posterUrl.w500;

  public MovieType = MovieType;
}
