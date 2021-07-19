import { Component, OnInit } from '@angular/core';
import { Shape } from '../Models/Shape';
import { ShapeCRUDService } from '../Services/shape-crud.service';

@Component({
  selector: 'app-list-shape',
  templateUrl: './list-shape.component.html',
  styleUrls: ['./list-shape.component.scss']
})
export class ListShapeComponent implements OnInit {

  constructor(public srvCRUD:ShapeCRUDService) { }

  ngOnInit(): void {
    this.srvCRUD.getListShape().subscribe(data=>{
      let shape:Shape=data;
      console.log(shape);
    })
  }


}
