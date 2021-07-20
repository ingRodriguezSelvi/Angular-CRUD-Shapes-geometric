import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const myModules = [
  MatDialogModule,
  MatIconModule,
  MatSnackBarModule,
  MatToolbarModule,
];

@NgModule({
  imports: [...myModules],
  exports: [...myModules]
})

export class MaterialModule { }
