import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { FlexComponent } from "./flex/flex.component";
import { TextComponent } from "./text/text.component";
import { RouterModule, Routes } from "@angular/router";
import { FlexTrialComponent } from "./flex-trial/flex-trial.component";
import { GridComponent } from "./grid/grid.component";
import { BootstrapComponent } from "./bootstrap/bootstrap.component";

const routes: Routes = [
  { path: "react-form", component: ProfileEditorComponent },
  { path: "flex", component: FlexComponent },
  { path: "text", component: TextComponent },
  { path: "flex-trial", component: FlexTrialComponent },
  { path: "grid", component: GridComponent },
  { path: "bootstrap", component: BootstrapComponent },
  { path: "", redirectTo: "react-form", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    FlexComponent,
    TextComponent,
    FlexTrialComponent,
    GridComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    // other imports ...
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
