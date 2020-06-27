import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { MapComponent } from './map/map.component';
import { SubmitComponent } from './submit/submit.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, MapComponent, SubmitComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
