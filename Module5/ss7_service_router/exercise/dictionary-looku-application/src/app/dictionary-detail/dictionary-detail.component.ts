import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/i-word';
import {DictinonaryService} from '../service/dictinonary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionaryDetail: IWord = {};

  constructor(private dictinonaryService: DictinonaryService, private active: ActivatedRoute) {
    this.active.paramMap.subscribe(data=>{
      const word=data.get("word")
      // @ts-ignore
      this.dictionaryDetail=this.dictinonaryService.findByWord(word);
      console.log(this.dictionaryDetail);
    })
  }

  ngOnInit(): void {
  }

}
