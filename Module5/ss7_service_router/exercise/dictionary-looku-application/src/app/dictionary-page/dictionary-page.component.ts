import {Component, OnInit} from '@angular/core';
import {DictinonaryService} from '../service/dictinonary.service';
import {IWord} from '../model/i-word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionarys: IWord[]=[];

  constructor(private dictinonaryService: DictinonaryService) {
    this.dictionarys=this.dictinonaryService.getAll();
  }

  ngOnInit(): void {
  }

}
