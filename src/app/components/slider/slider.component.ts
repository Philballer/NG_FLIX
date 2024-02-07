import { Component, OnInit, Input } from '@angular/core';

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

import { RouterLink } from '@angular/router';
import { IMovieTvShow } from '../../interfaces/types';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RoundUpPipe, RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input()
  public data!: IMovieTvShow[];

  @Input()
  public singleSlideBanner = false;

  @Input()
  public isTvShow = false;

  public startIndex: number = 0;

  public imageUrl = imageUrl.original;

  public ngOnInit(): void {
    !this.singleSlideBanner &&
      setInterval(() => {
        this.startIndex++;
        if (this.startIndex === 15) this.startIndex = 0;
      }, 5000);
  }
}
