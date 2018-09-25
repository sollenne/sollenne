import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
