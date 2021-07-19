import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from '@angular/material/snack-bar';
const myModules=[
  MatSnackBarModule,
  MatToolbarModule
];

@NgModule({
  imports:[...myModules],
  exports:[...myModules]
})

export class MaterialModule{}
