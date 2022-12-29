import {Injectable} from '@angular/core';
import {Comic} from '../model/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  playListComic: Comic[] = [
    {
      id: '939736',
      name: 'Tao Là Ác Nhân - Chapter 67'

    },
    {
      id: '942203',
      name: 'Tao Là Ác Nhân - Chapter 68'
    }
  ];

  constructor() {
  }
  findComicById(id: string) {
    return this.playListComic.find(item => item.id === id);
  }
}
