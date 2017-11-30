import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  videoNum: string;

  constructor() { }

  ngOnInit() {
    this.videoNum = '1';
  }

  play(num: string) {
    this.videoNum = num;
  }
}
