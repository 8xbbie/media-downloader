import { Thumbnail } from './../interface/video';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { VideoRequesterService } from '../video-requester.service';
import { Format, Video } from '../interface/video';
import { CommonModule } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-video-container',
  standalone: true,
  imports: [CommonModule, NzButtonComponent],
  templateUrl: './video-container.component.html',
  styleUrl: './video-container.component.css'
})
export class VideoContainerComponent{
  public result!: Video;
  public formats!: Format[];
  public thumbnail!: Thumbnail;
  public description!: string;


  public constructor(private videoService: VideoRequesterService){

  }

  public displayResults(){
    // console.log(this.result);
    this.getResults();
    this.thumbnail = this.result.thumbnail[0];
    this.description = this.result.description;
    this.formats = this.result.formats;
    console.log(this.result);
  }

  public getResults(){
    let sub = this.videoService.getVideo().subscribe(
      (value: Video) => this.result = value,

    );
    // console.log(this.result);
  }

}
