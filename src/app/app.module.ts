// angular modules
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// app modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//services
import { ValidationService } from './services/validation/validation.service';
import { ContactService } from './services/contact/contact.service';

// page components
import { HeaderComponent } from './site.components/header/header.component';
import { FooterComponent } from './site.components/footer/footer.component';
import { SidenavComponent } from './site.components/sidenav/sidenav.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';

// includes
import { HomeContactComponent } from './pages/home/content/home-contact/home-contact.component';
import { HomeServicesComponent } from './pages/home/content/home-services/home-services.component';
import { HomeBlogComponent } from './pages/home/content/home-blog/home-blog.component';
import { HomePortfolioComponent } from './pages/home/content/home-portfolio/home-portfolio.component';
import { HomeHeroComponent } from './pages/home/content/home-hero/home-hero.component';

// modules
import { MaterialModule } from './modules/material/material.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// internal pipes
import { ReverseOrderPipe } from './pipes/reverse-order.pipe';

// directives
import { HeaderTextDirective } from './directives/header-text/header-text.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    ReverseOrderPipe,
    BlogComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    SearchComponent,
    HomeContactComponent,
    HomeServicesComponent,
    HomeBlogComponent,
    HomePortfolioComponent,
    HomeHeroComponent,
    HeaderTextDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    ValidationService,
    ContactService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
