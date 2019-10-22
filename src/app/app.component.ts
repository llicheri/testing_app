import { Component, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export type EditorType =
  | "name"
  | "profile"
  | "flex"
  | "text"
  | "flex-trial"
  | "grid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  editor: EditorType = "grid";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    const splittedUrl = window.location.href.split("/");
    const lastPath = splittedUrl[splittedUrl.length - 1];
    this.router.navigateByUrl(lastPath);
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
    this.router.navigateByUrl(type);
  }
}
