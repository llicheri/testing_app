import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "jquery";

export type EditorType =
  | "react-form"
  | "flex"
  | "text"
  | "flex-trial"
  | "grid"
  | "bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  editor: EditorType = "react-form";

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.navigateOnCorrectRoute();
    this.setHeaderHeight();
  }

  private navigateOnCorrectRoute() {
    const splittedUrl = window.location.href.split("/");
    const lastPath = splittedUrl[splittedUrl.length - 1];
    this.router.navigateByUrl(lastPath);
  }

  private setHeaderHeight() {
    $(document).ready(function() {
      $(".header").height($(window).height());
    });
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
    this.router.navigateByUrl(type);
  }
}
