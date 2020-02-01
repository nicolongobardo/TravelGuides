import { CityDetailsComponent } from './components/city-details/city-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListsComponent } from './components/lists/lists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'list',
    component: ListsComponent,
  },

  {
    path: 'city-details',
    component: CityDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
