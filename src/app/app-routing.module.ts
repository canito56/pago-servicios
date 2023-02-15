import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { ChgitemComponent } from './components/chgitem/chgitem.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {path: '', component: ItemsComponent},
  {path: 'add', component: AdditemComponent},
  {path: 'chg/:id', component: ChgitemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
