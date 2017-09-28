import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Array<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getItems();
  }
}
