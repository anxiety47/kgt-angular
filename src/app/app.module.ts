import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';
import { SideNavBarComponent } from './core/side-nav-bar/side-nav-bar.component';
import { HomeComponent } from './modules/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TODO: use core/shared/module ***.module.ts files
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    SideNavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
