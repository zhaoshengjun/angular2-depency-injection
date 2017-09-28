import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { LogDebugger } from "./log-debugger";
import { ConsoleService } from "./console.service";
import { Observable } from "Rxjs/Observable";

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
      provide: "apiUrl",
      useValue: "http://localhost:4201/users"
    }
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
