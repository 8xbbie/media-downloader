import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdExtractorService {
  private youtubeUrlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
  constructor() { }
  public extractYoutubeVideoId(url: string): string | null {
      const match = url.match(this.youtubeUrlRegex);
      return match ? match[1] : null;
  }
}



//https://youtu.be/ra5qNKNc95U?si=fvKXQk8Ovla67pfD
//https://www.youtube.com/watch?v=RrU375Tgu5Y
//https://youtu.be/RrU375Tgu5Y
