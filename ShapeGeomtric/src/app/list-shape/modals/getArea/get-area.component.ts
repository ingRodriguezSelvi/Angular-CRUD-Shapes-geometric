import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShapeFactory } from 'src/app/Models/Shape';
import { ShapeCRUDService } from 'src/app/Services/shape-crud.service';

@Component({
  selector: 'get-area',
  templateUrl: './get-area.component.html',
  styleUrls: ['./get-area.component.scss']
})

export class GetAreaComponent implements OnInit {

  shapeFactory:ShapeFactory=new ShapeFactory(
    "","",0,0,0,0)

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:{id:string},
    public srvCRUD:ShapeCRUDService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.getArea(this.data.id)
  }

  getArea(id:string){
    this.srvCRUD.getAreaShape(id).subscribe(data=>{
      this.shapeFactory=data;
    },(error:HttpErrorResponse)=>{
      this._snackBar.open('Error of conection with server.', 'OK', {
        duration: 5000,
        panelClass: ['alert-snackbar'],
      });
    })
  }
}
