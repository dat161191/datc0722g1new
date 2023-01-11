import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ComicService} from '../service/comic.service';

@Component({
  selector: 'app-comic-player',
  templateUrl: './comic-player.component.html',
  styleUrls: ['./comic-player.component.css']
})
export class ComicPlayerComponent implements OnInit {
  comic: any;

  constructor( private comicService: ComicService,
               private activatedRoute: ActivatedRoute,
               private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id: any = paramMap.get('id');
      this.comic = this.comicService.findComicById(id);
    });
  }

  getSrc() {
    const url = 'https://nettruyenup.com/' + this.comic.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
