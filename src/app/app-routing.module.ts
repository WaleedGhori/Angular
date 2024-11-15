import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VnetComponent } from './Vnet/Vnet.component';

const routes: Routes = [
  {path:'',component:VnetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
