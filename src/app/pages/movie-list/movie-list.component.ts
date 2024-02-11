import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  public showRecomendationBox = true;

  public onInputChange(input: string): void {
    if (input === '') {
      this.setShowRecomendationBox(false);
      return;
    }
    this.setShowRecomendationBox(true);
    console.log(`User Input: ${input}`);
  }

  public showLastSearches(): void {
    this.setShowRecomendationBox(true);
    console.log(`Last searches Activated`);
  }

  public setShowRecomendationBox(value: boolean): void {
    this.showRecomendationBox = value;
  }
}
