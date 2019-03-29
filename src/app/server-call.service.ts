import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import "rxjs/add/observable/combineLatest";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/map";
@Injectable({
  providedIn: "root"
})
export class ServerCallService {
  constructor(private http: HttpClient) {}
  sendCall(): Observable<any> {
    console.log("sending the call");
    return this.http.get("http://localhost:7000/users");
  }
}
