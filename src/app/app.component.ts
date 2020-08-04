import { Component } from "@angular/core";
import { mabCardAlign } from "./mab-card/mab-card-align.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  _mabCardAlign = mabCardAlign;
}
