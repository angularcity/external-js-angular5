
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
declare var greetings: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  message;


  ngOnInit(): void {
    this.message = greetings();
  }
}



