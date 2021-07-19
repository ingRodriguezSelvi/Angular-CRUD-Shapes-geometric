import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { config, Observable } from 'rxjs';
import { Shape, ShapeFactory } from '../Models/Shape';
import { environment } from 'src/environments/environment';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShapeCRUDService {

  constructor(private http:HttpClient) { }

  getListShape():Observable<Shape[]>{
    const httpOptions = {
      headers: new HttpHeaders({

        accept: '*/*'

      })
    };

    return this.http.get<Shape[]>(`${environment.API_URL}`+'api/Shape/',httpOptions)
    .pipe(map((res:Shape[])=>{
      console.log(res);
      return res;
    }))
  }
  addShape(shape:Shape):Observable<Shape>{
    const httpOptions = {
      headers: new HttpHeaders({
        accept: '*/*'
      })
    };
    return this.http.post<Shape>(`${environment.API_URL}`+'api/addShape',shape,httpOptions)
    .pipe(map((res:Shape)=>{
      return res;
    }))
  }
  getAreaShape(_id:string):Observable<ShapeFactory>{
    const httpOptions = {
      headers: new HttpHeaders({
        accept: '*/*'
      }),params:new HttpParams().append('id',_id)
    };
    return this.http.get<ShapeFactory>(`${environment.API_URL}`+'api/Shape/',httpOptions)
    .pipe(map((res:ShapeFactory)=>{
      return res;
    }))
  }
}
