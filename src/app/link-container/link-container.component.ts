import { Component } from '@angular/core';
import { IdExtractorService } from '../id-extractor.service';

@Component({
  selector: 'app-link-container',
  standalone: true,
  imports: [],
  templateUrl: './link-container.component.html',
  styleUrl: './link-container.component.css'
})
export class LinkContainerComponent {
  private idExtractor = new IdExtractorService();
  public getVideo(videoLink: string){
    let videoId = this.idExtractor.extractYoutubeVideoId(videoLink);
    alert(videoId);

  }

}
