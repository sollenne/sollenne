import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})

export class HomePortfolioComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'You\'re probably looking for this...';
  }

}
