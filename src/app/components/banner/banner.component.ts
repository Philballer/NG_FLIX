import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { IMovie } from '../../interfaces/i-movie';
import { ITvShow } from '../../interfaces/i-tvShow';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input()
  public header: string = '';

  @Input()
  public movies?: IMovie[];

  @Input()
  public tvShows?: ITvShow[];

  @Input()
  public isTvShow = false;

  @Input()
  public numberOfCards?: number;
}
