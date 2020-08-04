import { Component, OnInit, Input } from "@angular/core";
import { mabCardAlign } from "./mab-card-align.enum";

@Component({
  selector: "app-mab-card",
  templateUrl: "./mab-card.component.html",
  styleUrls: ["./mab-card.component.scss"],
})
export class MabCardComponent implements OnInit {
  @Input() highlighted: boolean = false;
  @Input() txtAlign: mabCardAlign = 1;
  @Input() imgAlign: mabCardAlign = 0;

  txtAlignClass: string;
  imgAlignClass: string;

  constructor() {}

  ngOnInit(): void {
    this.txtAlignClass = this.setAlignClass(this.txtAlign);
    this.imgAlignClass = this.setAlignClass(this.imgAlign);
  }

  setAlignClass(alignment): string {
    let className: string;

    switch (alignment) {
      case 0:
        className = "center";
        break;
      case 1:
        className = "left";
        break;
      case 2:
        className = "right";
        break;
    }

    return className;
  }
}
