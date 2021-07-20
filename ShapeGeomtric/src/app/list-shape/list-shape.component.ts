import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Shape } from '../Models/Shape';
import { GlobalVariablesService } from '../Services/global-variables.service';
import { ShapeCRUDService } from '../Services/shape-crud.service';
import { EditShapeComponent } from './modals/editShape/edit-shape.component';
import { GetAreaComponent } from './modals/getArea/get-area.component';

@Component({
  selector: 'app-list-shape',
  templateUrl: './list-shape.component.html',
  styleUrls: ['./list-shape.component.scss']
})
export class ListShapeComponent implements OnInit {

  shapes:string[]=["CIRCLE","TRIANGLE","SQUARE"];
  listShapes:Shape[]=[];
  status?:number;
  flag:boolean=true;
  addShapeForm = this.fb.group({
    _id:[''],
    type:['CIRCLE'],
    base:[null],
    height:[null],
    diameter:[null]
  });
  constructor(
    public dialog:MatDialog,
    public srvCRUD:ShapeCRUDService,
    public globalvariables:GlobalVariablesService,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.globalvariables.isCircle=true;
    this.getList();
  }
  getList(){
    if(this.listShapes.length<=0){
      this.flag=true;
    }
    this.srvCRUD.getListShape().subscribe(data=>{
      this.flag=false;
      this.listShapes=data;
    },(error:HttpErrorResponse)=>{
      this.flag=true;
      this.status=error.status;

      this._snackBar.open('Error of conection with server.', 'OK', {
        duration: 5000,
        panelClass: ['alert-snackbar'],
      });
    })
  }
  typeShape(x:string){
    this.addShapeForm.value.type=x;
    switch (x) {
      case "TRIANGLE":
       this.globalvariables.isTriangle=true;
       this.globalvariables.isSquare=false;
       this.globalvariables.isCircle=false;
      break;

      case "CIRCLE":
       this.globalvariables.isTriangle=false;
       this.globalvariables.isSquare=false;
       this.globalvariables.isCircle=true;
      break;

      case "SQUARE":
       this.globalvariables.isTriangle=false;
       this.globalvariables.isSquare=true;
       this.globalvariables.isCircle=false;
      break;

      default:
        break;
    }
    this.clear(x);
  }
  reload(){
    this.status=1;
    this.ngOnInit();
  }
  addShape(){
    if(this.addShapeForm.invalid){
      this._snackBar.open('Complete the form please.', 'OK', {
        duration: 5000,
        panelClass: ['done-snackbar'],
      });
      return;
    }else{
      const formValue=this.addShapeForm.value;
      this.srvCRUD.addShape(formValue).subscribe(data=>{
        this._snackBar.open('Add Susscefull.', 'OK', {
          duration: 5000,
          panelClass: ['done-snackbar'],
        });
        this.getList();
        this.clear();
      }),(error:HttpErrorResponse)=>{
        this.flag=true;
        this.status=error.status;

        this._snackBar.open('Error of conection with server.', 'OK', {
          duration: 5000,
          panelClass: ['alert-snackbar'],
        });
      }
    }
  }
  deleteShape(id:string){
    this.srvCRUD.deleteShape(id).subscribe(()=>{
      this._snackBar.open('Delete Susscefull.', 'OK', {
        duration: 5000,
        panelClass: ['done-snackbar'],
      });
      this.getList();
    }),(error:HttpErrorResponse)=>{
      this.flag=true;
      this.status=error.status;
      this._snackBar.open('Error of conection with server.', 'OK', {
        duration: 5000,
        panelClass: ['alert-snackbar'],
      });
    }
  }
  clear(x?:string){
    if(x){
      this.addShapeForm = this.fb.group({
        _id:[''],
        type:[x],
        base:[null],
        height:[null],
        diameter:[null]
      });
    }else{
      this.addShapeForm = this.fb.group({
        _id:[''],
        type:['CIRCLE'],
        base:[null],
        height:[null],
        diameter:[null]
      });
    }

  }
  openModal(id:string){
    this.dialog.open(EditShapeComponent,{data:{id}}).afterClosed()
    .subscribe(()=>{
      this.getList();
    });
  }
  openArea(id:string){
    this.dialog.open(GetAreaComponent,{data:{id}})
  }
}
