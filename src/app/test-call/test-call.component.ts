import { Component, OnInit } from "@angular/core";
import { ServerCallService } from "../server-call.service";
@Component({
  selector: "app-test-call",
  templateUrl: "./test-call.component.html",
  styleUrls: ["./test-call.component.css"]
})
export class TestCallComponent implements OnInit {
  constructor(private appService: ServerCallService) {}

  ngOnInit() {
    this.appService.sendCall().subscribe(data => {
      console.log("GGGGGGGGTOOOOOOOOOO");
      console.log(data);
    });
  }
}
