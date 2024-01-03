import { Component } from '@angular/core';
import { IdExtractorService } from '../id-extractor.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgIf } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs';


@Component({
  selector: 'app-link-container',
  standalone: true,
  imports: [NzInputModule, FormsModule, NzIconModule, NgIf, NzButtonComponent],
  templateUrl: './link-container.component.html',
  styleUrl: './link-container.component.css'
})
export class LinkContainerComponent {
  private idExtractor = new IdExtractorService();
  public videoUrl : string | null = null;
  public textValue: string | null = null;
  public constructor(private message: NzMessageService) {

  }
  public getVideo(){
    let videoId = this.idExtractor.extractYoutubeVideoId(this.videoUrl!);

    localStorage.setItem("videoId", videoId!.toString());
    localStorage.setItem("videoUrl", this.videoUrl!);
    // this.message.info("This is a message");
    alert("Video link pasted");
  }

}


