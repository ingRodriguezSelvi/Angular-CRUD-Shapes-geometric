import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  addShapeForm = this.fb.group({
    _id:[''],
    type:[''],
    base:[null],
    height:[null],
    diameter:[null]
  });
  constructor(public srvCRUD:ShapeCRUDService,public globalvariables:GlobalVariablesService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.srvCRUD.getListShape().subscribe(data=>{
      this.listShapes=data;
    })
  }
  typeShape(){
  }


}
