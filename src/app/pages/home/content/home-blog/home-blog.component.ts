import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Just call me Jack Handey.';
  }

}
