import { Component, OnInit } from '@angular/core';
import {Song} from '../model/song';
import {SongService} from '../service/song.service';
import {ComicService} from '../service/comic.service';
import {Comic} from '../model/comic';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  playlist: Song[] = [];
  playList: Comic[] = [];

  constructor(private songService: SongService,private comicService:ComicService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.playlist = this.songService.playlist;
    this.playList = this.comicService.playListComic;
  }
}
