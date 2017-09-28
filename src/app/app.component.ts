import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { LogDebugger } from "./log-debugger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [
    { provide: DataService, useClass: DataService },
    { provide: LogDebugger, useFactory: () => new LogDebugger(false) }
  ],
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  items: Array<any>;

  constructor(
    private dataService: DataService,
    private logDebugger: LogDebugger
  ) {}

  ngOnInit() {
    this.logDebugger.debug("Getting items ...");
    this.items = this.dataService.getItems();
  }
}
