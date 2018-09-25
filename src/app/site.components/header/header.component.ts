import { Component, OnInit } from '@angular/core';

declare interface IHeaderLink {
  label: string;
  url?: string;
  home?: boolean;
  action?: void;
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
        action: this.search(),
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

  public search = (): void => {
    console.info('search');
  }
}
