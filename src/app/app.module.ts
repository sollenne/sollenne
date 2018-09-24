// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// page components
import { HeaderComponent } from './site.components/header/header.component';
import { FooterComponent } from './site.components/footer/footer.component';
import { SidenavComponent } from './site.components/sidenav/sidenav.component';

// pages
import { HomeComponent } from './pages/home/home.component';

// internal modules
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
