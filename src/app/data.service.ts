import { LogDebugger } from "./log-debugger";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class DataService {
  apiUrl = "http://localhost:4201/users";

  constructor(private logDebugger: LogDebugger, private http: Http) {}

  getItems() {
    this.logDebugger.debug("Getting items ......");
    return this.http
      .get(this.apiUrl)
      .map(res => res.json())
      .map(data => data);
  }
}
