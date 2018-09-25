import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

declare interface IHeaderLink {
  label: string;
  url?: string;
  home?: boolean;
  action?: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public headerLinks: Array<IHeaderLink>;
  public homePage: boolean;

  constructor(
    private router: Router,
  ) {
    this.homePage = true;

    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
        // something goes here probably... maybe.
      }

      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.homePage = true;
        } else {
          this.homePage = false;
        }
        console.info(this.router.url);
      }

      if (event instanceof NavigationError) {
        console.warn(event.error);
      }
    });

  }

  ngOnInit() {
    this.headerLinks = [
      {
        label: '#SOLLENNE',
        url: '/',
        home: true,
      },
      {
        label: 'search',
        url: 'search',
        action: true,
      },
      {
        label: 'portfolio',
        url: 'portfolio',
      },
      {
        label: 'services',
        url: 'services',
      },
      {
        label: 'blog',
        url: 'blog',
      },
      {
        label: 'contact',
        url: 'contact',
      },
    ];

  }

  public action = (label: string): void => {
    switch(label) {
      case 'search':
        console.info('search');
        break;
      default:
        console.warn('no action specified!');
    }
  }
}
