import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { FlexComponent } from "./flex/flex.component";
import { TextComponent } from "./text/text.component";
import { RouterModule, Routes } from "@angular/router";
import { FlexTrialComponent } from "./flex-trial/flex-trial.component";
import { GridComponent } from "./grid/grid.component";

const routes: Routes = [
  { path: "name", component: NameEditorComponent },
  { path: "profile", component: ProfileEditorComponent },
  { path: "flex", component: FlexComponent },
  { path: "text", component: TextComponent },
  { path: "flex-trial", component: FlexTrialComponent },
  { path: "grid", component: GridComponent },
  { path: "", redirectTo: "flex", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FlexComponent,
    TextComponent,
    FlexTrialComponent,
    GridComponent
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
