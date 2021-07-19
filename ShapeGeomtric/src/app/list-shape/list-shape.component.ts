import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Shape } from '../Models/Shape';
import { GlobalVariablesService } from '../Services/global-variables.service';
import { ShapeCRUDService } from '../Services/shape-crud.service';

@Component({
  selector: 'app-list-shape',
  templateUrl: './list-shape.component.html',
  styleUrls: ['./list-shape.component.scss']
})
export class ListShapeComponent implements OnInit {

  shapes:string[]=["CIRCLE","TRIANGLE","SQUARE"];
  listShapes:Shape[]=[];
  ErrMsj?:string;
  flag:boolean=true;
  addShapeForm = this.fb.group({
    _id:[''],
    type:[''],
    base:[null],
    height:[null],
    diameter:[null]
  });
  constructor(public srvCRUD:ShapeCRUDService,public globalvariables:GlobalVariablesService,private fb:FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.srvCRUD.getListShape().subscribe(data=>{
      this.flag=false;
      this.listShapes=data;
    },(error)=>{

      this._snackBar.open('hola', '', {
        duration: 5000,
        panelClass: ['alert-snackbar'],
      });
    })
  }
  typeShape(){
  }


}
