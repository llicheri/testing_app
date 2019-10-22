import { Component, OnInit } from "@angular/core";

export type flexTypes = "row" | "row-reverse" | "column" | "column-reverse";
export type justifyTypes =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around";
export type alignTypes =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

@Component({
  selector: "app-flex-trial",
  templateUrl: "./flex-trial.component.html",
  styleUrls: ["./flex-trial.component.css"]
})
export class FlexTrialComponent implements OnInit {
  flex: flexTypes = "row";
  justify: justifyTypes = "flex-start";
  align: alignTypes = "flex-start";

  flexDirectionValues: flexTypes[] = [
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ];
  justifyContentValues: justifyTypes[] = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around"
  ];
  alignItemsValues: alignTypes[] = [
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline"
  ];

  constructor() {}

  ngOnInit() {}

  onRadioChange(value: string, radio: "flex" | "justify" | "align") {
    let prop;
    switch (radio) {
      case "align":
        prop = "alignItems";
        break;
      case "justify":
        prop = "justifyContent";
        break;
      case "flex":
        prop = "flexDirection";
        break;
    }
    (document.querySelector(".divs-container") as HTMLElement).style[
      prop
    ] = value;

    (document.getElementsByClassName("divs-container")[0] as HTMLElement).style[
      prop
    ] = value;
  }
}
