import {Injectable} from '@angular/core';
import {IWord} from '../model/i-word';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictinonaryService {
  dictionarys: IWord[] = [
    {
      word: 'Hello',
      mean: 'Xin Chào'
    }, {
      word: 'Hi',
      mean: 'Xin Chào'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionarys;
  }

  findByWord(word: any) {
    return this.dictionarys.find(element=>element.word===word);
  }
}
