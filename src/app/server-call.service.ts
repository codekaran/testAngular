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
    return this.http.get("http://139.59.77.99:7000/users");
  }
  sendImage(data): Observable<any> {
    console.log("sending image");
    return this.http.post("http://139.59.77.99:7000/users/image", data);
  }
}
