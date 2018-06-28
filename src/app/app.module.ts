import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {SoundcloudComponent} from './soundcloud/soundcloud.component';
import {SoundcloudService} from './soundcloud/soundcloud.service';


@NgModule({
  declarations: [
    AppComponent,
    SoundcloudComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SoundcloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
