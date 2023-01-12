import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatisticalComponent} from './statistical/statistical.component';

const routes: Routes = [
  {path: '', component: StatisticalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
