import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserboardComponent } from './userboard/userboard.component';
import { UserLeftComponent } from './user-left/user-left.component';
import { UserRightComponent } from './user-right/user-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserboardComponent,
    UserLeftComponent,
    UserRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
