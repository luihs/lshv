import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { FontsComponent } from './component/fonts/fonts.component';

const routes: Routes = [
  { path: "Menu", component: MenuComponent },
  { path: "Fonts", component: FontsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
