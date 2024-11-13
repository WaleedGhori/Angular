import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceFormComponent } from './ResourceForm/ResourceForm.component';

const routes: Routes = [
  {path:'',component:ResourceFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
