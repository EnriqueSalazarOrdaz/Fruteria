import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GameListComponent} from './components/game-list/game-list.component';

import {GameFormComponent} from './components/game-form/game-form.component';

import {IndexComponent} from './components/index/index.component';

const routes: Routes = [
  {
  path:'', //1:47 ruta inicial
  redirectTo:'/index',
  pathMatch:'full' //esto e sporque path:''
},
{
  path:'games',
  component: GameListComponent
},
{
  path:'games/add',
  component: GameFormComponent
},
{
  path:'games/edit/:id',
  component:GameFormComponent
},
{
  path:'index',
  component: IndexComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
