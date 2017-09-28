import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { LogDebugger } from "./log-debugger";
import { ConsoleService } from "./console.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: consoleService => new LogDebugger(consoleService, true),
      deps: [ConsoleService]
    }
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
