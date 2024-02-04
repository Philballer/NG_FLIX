import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/i-movie';
import { CommonModule } from '@angular/common';
import { RoundUpPipe } from '../../pipes/round-up.pipe';
import { imageUrl } from '../../cosntants/images-size';
import { ITvShow } from '../../interfaces/i-tvShow';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RoundUpPipe],
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

  public imageUrl = imageUrl.original;
}
