import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservableComponent,
    OfOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
