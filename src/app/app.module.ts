import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomQuoteMachineComponent } from './components/random-quote-machine/random-quote-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
