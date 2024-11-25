import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VnetComponent } from './Vnet/Vnet.component';
import { TaskComponent } from './task/Task.component';

const routes: Routes = [
  {path:'',component:VnetComponent},
  {path:'task',component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
