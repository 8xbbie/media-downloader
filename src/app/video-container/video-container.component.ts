import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { VideoRequesterService } from '../video-requester.service';
import { Video } from '../interface/video';

@Component({
  selector: 'app-video-container',
  standalone: true,
  imports: [],
  templateUrl: './video-container.component.html',
  styleUrl: './video-container.component.css'
})
export class VideoContainerComponent implements OnInit{
  public result: any;

  public constructor(private videoService: VideoRequesterService){}
  ngOnInit(): void {
    this.getResults();
  }

  public getResults(){
    this.videoService.getVideo().subscribe(
      (value: Video) => this.result = value,
    );

    console.log(this.result);

  }

}
