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
    this.videoUrl = this.videoUrl?.trim()!;
    const videoId: string = this.idExtractor.extractYoutubeVideoId(this.videoUrl!);

    localStorage.setItem("videoId", videoId!.toString());
    localStorage.setItem("videoUrl", this.videoUrl!);
    // this.message.info("This is a message");
    const message: string = videoId == "null"? "Please enter a valid YouTube link": "Your video is getting ready";
    alert (message);

    // the code below is used to test the idExtractor service
    // I could not figure out how to run the code externally
    // but i swear i will figure it out and run like proper tests later 🫠

    let idExtractorService = new IdExtractorService();
    let arrayOfId: string[] = [
        "UOQuTC6O790",
        "RrU375Tgu5Y",
        "K07FYfRlSw0",
        "RrU375Tgu5Y",
        "UOQuTC6O790",

    ], arrayOfLinks: string[] = [
      "https://www.youtube.com/shorts/UOQuTC6O790",
      "https://youtu.be/RrU375Tgu5Y",
      "https://youtu.be/K07FYfRlSw0?si=wMDoy40HcaQWcohu",
      "https://www.youtube.com/watch?v=RrU375Tgu5Y",
      "https://youtube.com/shorts/UOQuTC6O790?si=ZeZByrVZlB-YItCL",


    ]; //these two arrays act as an array pair. indices should match!!

    let numOfCases: number = 0, numOfSuccesses: number = 0;

    for(; numOfCases < arrayOfId.length; numOfCases++){
        const link: string = arrayOfLinks[numOfCases];
        const id: string = idExtractorService.extractYoutubeVideoId(link);
        if(id == arrayOfId[numOfCases]) {
            console.log("Test ", numOfCases, 'passed');
            numOfSuccesses++;
        }else {
            console.error("Test ", numOfCases, "failed. Function broke for link in form", link);
        }
    }

    console.log(numOfSuccesses, " cases passed out of " ,numOfCases);
  }

}


