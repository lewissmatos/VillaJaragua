import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { StreetsComponent } from './components/streets/streets.component';
import { SectorCardComponent } from './components/sector-card/sector-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SectorsComponent,
    StreetsComponent,
    SectorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
