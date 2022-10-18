import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KlubbokComponent } from './klubbok/klubbok.component';

@NgModule({
  declarations: [
    AppComponent,
    KlubbokComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
