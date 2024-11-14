import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceFormComponent } from './ResourceForm/ResourceForm.component';

import { ReactiveFormsModule } from '@angular/forms';
// import { VnetComponent } from './Vnet/Vnet.component';
// import { SubnetComponent } from './subnet/subnet.component';
// import { GnetComponent } from './gnet/gnet.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourceFormComponent,
    // VnetComponent,
    // SubnetComponent,
    // GnetComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
