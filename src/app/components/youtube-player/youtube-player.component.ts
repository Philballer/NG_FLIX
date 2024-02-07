import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.scss',
})
export class YoutubePlayerComponent implements OnInit {
  @Input()
  public key?: string;

  @Input()
  public name?: string;

  public videoUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.key}`
    );
  }
}
