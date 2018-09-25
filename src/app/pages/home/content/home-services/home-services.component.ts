import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})

export class HomeServicesComponent implements OnInit {
  public servicesTitle1: string;
  public servicesTitle2: string;
  public servicesTitle3: string;

  constructor() { }

  ngOnInit() {
    this.servicesTitle1 = 'What would you say you do here?';
    this.servicesTitle2 = 'So, are we right for each other?';
    this.servicesTitle3 = 'Cool icons for things I use.';
  }

}
