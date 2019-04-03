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
  public sendImage(data: File) {
    console.log("image daaattttaaaa");
    console.log(data);
    this.appService.sendImage({ data }).subscribe(doc => {
      console.log(doc);
      console.log("got the image");
    });
  }
}
