import { Thumbnail } from './../interface/video';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { VideoRequesterService } from '../video-requester.service';
import { Format, Video } from '../interface/video';

@Component({
  selector: 'app-video-container',
  standalone: true,
  imports: [],
  templateUrl: './video-container.component.html',
  styleUrl: './video-container.component.css'
})
export class VideoContainerComponent implements OnInit{
  public result!: Video;
  public formats!: Format[];
  public thumbnail!: Thumbnail;
  public description!: string;


  public constructor(private videoService: VideoRequesterService){

  }

  ngOnInit(): void {
    this.getResults();
  }

  public displayResults(){
    console.log(this.result);

  }

  public getResults(){
    let sub = this.videoService.getVideo().subscribe(
      (value: Video) => this.result = value,

    );
    // console.log(this.result);

  }

}
