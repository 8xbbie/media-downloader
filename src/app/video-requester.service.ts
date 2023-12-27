import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IdExtractorService } from './id-extractor.service';
import { Observable } from 'rxjs';
import { Video } from './interface/video';

@Injectable({
  providedIn: 'root'
})
export class VideoRequesterService {

  private options = {
    method: 'GET',
    url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
    params: {id: 'UxxajLWwzqY'},
    headers: {
      'X-RapidAPI-Key': 'db659f124bmsh2277f04934ef1bap1ae9ecjsn4d82b9efbcea',
      'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
  };
  private url = "https://ytstream-download-youtube-videos.p.rapidapi.com/dl";
  public values : any;

  constructor(private http: HttpClient) {

  }
  public hasLinkInStorage(): boolean{
    return localStorage.getItem("videoUrl") != null;
  }

  public getVideo(): Observable<Video>{

      let videoId = localStorage.getItem("videoId");
      const headers = new HttpHeaders();
      const params = new HttpParams();
      params.set("id", videoId!);
      headers.set('X-RapidAPI-Key', 'db659f124bmsh2277f04934ef1bap1ae9ecjsn4d82b9efbcea');
      headers.set('X-RapidAPI-Host', 'ytstream-download-youtube-videos.p.rapidapi.com');
      console.log(videoId);
      return this.http.get<Video>(this.url + "?id=" + videoId, {headers});
  }
}
