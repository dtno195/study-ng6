import { Component } from "@angular/core";
import { setTheme } from "ngx-bootstrap/utils";
import { MailService } from "./mail.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "simple";
  constructor(private mail: MailService) {
    setTheme("bs4");
  }
}
