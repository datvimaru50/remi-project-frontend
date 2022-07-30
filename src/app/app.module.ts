import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemiVideoItemComponent } from './video-item/controller.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingEffectComponent } from './loading-effect/controller.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RemiVideoItemComponent,
    LoadingEffectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
