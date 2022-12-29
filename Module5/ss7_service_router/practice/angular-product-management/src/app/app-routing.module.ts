import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {ComicPlayerComponent} from './comic-player/comic-player.component';

const routes: Routes = [{
  path: 'youtube',
  component: YoutubePlaylistComponent,
  children: [
    {
      path: 'song/:id', component: YoutubePlayerComponent
    },
    {path: 'comic/:id', component: ComicPlayerComponent}],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
