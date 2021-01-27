import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpenHomeComponent } from './open-home/open-home.component';
import { BackendApiService } from './services/backend-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OpenHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
