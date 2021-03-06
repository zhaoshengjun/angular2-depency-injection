import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { LogDebugger } from "./log-debugger";
import { ConsoleService } from "./console.service";
import { Observable } from "Rxjs/Observable";
import { THIRD_PARTY_PROVIDERS } from "./third-party";
import { API_URL } from "./app.tokens";

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
    },
    {
      provide: API_URL,
      useValue: "http://localhost:4201/users"
    },
    THIRD_PARTY_PROVIDERS
  ],
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  items: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getItems();
  }
}
