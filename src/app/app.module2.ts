/**
 * Created by yuyang on 13/07/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponent2 } from './home.component2';


import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent2,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
