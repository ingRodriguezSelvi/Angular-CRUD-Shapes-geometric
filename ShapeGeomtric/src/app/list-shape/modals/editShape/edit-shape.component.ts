import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Shape, ShapeFactory } from 'src/app/Models/Shape';
import { ShapeCRUDService } from 'src/app/Services/shape-crud.service';

@Component({
  selector: 'app-edi-shape',
  templateUrl: './edit-shape.component.html',
  styleUrls: ['./edit-shape.component.scss']
})

export class EditShapeComponent implements OnInit {
  aux:boolean=true;
  shapeEdit:Shape=new Shape(
    "","",0,0,0
  );
  EditShapeForm = this.fb.group({
    _id:[''],
    type:['CIRCLE'],
    base:[null],
    height:[null],
    diameter:[null]
  });
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:{id:string},
    public srvCRUD:ShapeCRUDService,
    private _snackBar: MatSnackBar,
    private fb:FormBuilder){}

  ngOnInit(): void {
    this.srvCRUD.getShape(this.data.id).subscribe(data=>{
      this.shapeEdit=data;
    },(error:HttpErrorResponse)=>{
      this._snackBar.open('Error of conection with server.', 'OK', {
        duration: 5000,
        panelClass: ['alert-snackbar'],
      });
    })
  }
  editShape(){
    this.srvCRUD.editShape(this.EditShapeForm.value).subscribe(data=>{
      this._snackBar.open('Edit Susscefull.', 'OK', {
        duration: 5000,
        panelClass: ['done-snackbar'],
      });
    },(error:HttpErrorResponse)=>{
      this._snackBar.open('Error of conection with server.', 'OK', {
        duration: 5000,
        panelClass: ['alert-snackbar'],
      });
    })
  }

}
