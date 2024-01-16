import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponent } from './cover/cover.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './cover/login/login.component';
import { SignInComponent } from './cover/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    MenuComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
