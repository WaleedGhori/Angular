import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceFormComponent } from './ResourceForm/ResourceForm.component';

import { ReactiveFormsModule } from '@angular/forms';
import { VnetComponent } from './Vnet/Vnet.component';
import { SubnetComponent } from './subnet/subnet.component';
import { NicComponent } from './nic/nic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { TaskComponent } from './task/Task.component';

@NgModule({
  declarations: [
    AppComponent,
    VnetComponent,
    ResourceFormComponent,
    SubnetComponent,
    NicComponent,
    TaskComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatExpansionModule,MatInputModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
