import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})

export class HomeContactComponent implements OnInit {
  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Still ready to get started?';
  }

}
