import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ListGamesComponent } from './list-games/list-games.component';
//import { SuccessComponent } from './Success/success/success.component';
// import { ListGamesComponent } from './list-games/list-games.component';

@NgModule({
  declarations: [
    AppComponent,
 ListGamesComponent,
 //SuccessComponent
  ],
  imports: [
    BrowserModule,
 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
