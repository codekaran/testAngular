import { Component } from "@angular/core";
// import { ServerCallService } from "./server-call.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // constructor(private appService: ServerCallService) {}
  // ngOnInit() {
  //   this.appService.sendCall().subscribe(data => {
  //     console.log("GGGGGGGGTOOOOOOOOOO");
  //     console.log(data);
  //   });
  // }
  title = "app";
}
