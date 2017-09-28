import { LogDebugger } from "./log-debugger";
import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { API_URL } from "./app.tokens";
import "rxjs/add/operator/map";
@Injectable()
export class DataService {
  constructor(
    private logDebugger: LogDebugger,
    private http: Http,
    @Inject(API_URL) private apiUrl
  ) {}

  getItems() {
    this.logDebugger.debug("Getting items ......");
    return this.http
      .get(this.apiUrl)
      .map(res => res.json())
      .map(data => data);
  }
}
