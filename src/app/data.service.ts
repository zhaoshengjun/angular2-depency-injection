import { LogDebugger } from "./log-debugger";
import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class DataService {
  constructor(
    private logDebugger: LogDebugger,
    private http: Http,
    @Inject("apiUrl") private apiUrl
  ) {}

  getItems() {
    this.logDebugger.debug("Getting items ......");
    return this.http
      .get(this.apiUrl)
      .map(res => res.json())
      .map(data => data);
  }
}
