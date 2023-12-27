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
  public videoUrl = "";
  public constructor() {
    

  }
  public getVideo(videoLink: string){
    let videoId = this.idExtractor.extractYoutubeVideoId(videoLink);

    localStorage.setItem("videoId", videoId!.toString());
    localStorage.setItem("videoUrl", videoLink);
    alert(videoId);

  }

}
