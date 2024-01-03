import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdExtractorService {
  private youtubeUrlRegex: RegExp[] = [ //an array of regular expressions used to check if the url is a valid youtube url
    /^https:\/\/youtu.be\/([a-zA-Z0-9_-]{11})/, // short url
    /^https:\/\/www.youtube.com\/watch\?v=([a-zA-Z0-9_-]{11})/, //standard url
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, //mixed url
    /^https?:\/\/(www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11,12})(\?.*)?$/, //shorts url
  ]

  constructor() { }
  public extractYoutubeVideoId(url: string): string  {

      for(let i = 0; i < this.youtubeUrlRegex.length; i++){
        const testResult = this.regexUrlTest(url, this.youtubeUrlRegex[i]);
        // console.log("Test result", testResult, "regex number ", i, "of ", this.youtubeUrlRegex.length);
        if(typeof testResult == "string") return testResult;
      }
      return "null";
  }

  private regexUrlTest(url: string, regex: RegExp): string | null{
    const match = url.match(regex);
    const regexForId = /^[a-zA-Z0-9-_]{11,12}$/;
    let size: number = match == null? 0: match.length;
    for(let i = 0; i < size; i++){
      let matchingTerm: string = match == null? "null": match[i];
      // console.log("matching term fr", matchingTerm);
      if(matchingTerm.match(regexForId) != null) return matchingTerm;
    }
    return null;
  }
}



//https://youtu.be/ra5qNKNc95U?si=fvKXQk8Ovla67pfD
//https://www.youtube.com/watch?v=RrU375Tgu5Y
//https://youtu.be/RrU375Tgu5Y
//https://youtube.com/shorts/UOQuTC6O790?si=ZeZByrVZlB-YItCL
