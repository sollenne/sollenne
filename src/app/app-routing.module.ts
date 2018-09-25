// angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// page components
import { HomeComponent } from './pages/home/home.component';
import {SearchComponent} from "./pages/search/search.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ServicesComponent} from "./pages/services/services.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
