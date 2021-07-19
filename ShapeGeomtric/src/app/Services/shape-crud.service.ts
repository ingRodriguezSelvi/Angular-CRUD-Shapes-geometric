import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { config, Observable, throwError } from 'rxjs';
import { Shape, ShapeFactory } from '../Models/Shape';
import { environment } from 'src/environments/environment';
import { catchError,map } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class ShapeCRUDService {

  constructor(private http:HttpClient) { }

  getListShape():Observable<Shape[]|any>{
    const httpOptions = {
      headers: new HttpHeaders({

        accept: '*/*'

      })
    };

    return this.http.get<Shape[]>(`${environment.API_URL}`+'api/Shape/',httpOptions)
    .pipe(map((res:Shape[])=>{
      console.log(res);
      return res;
    }),catchError((error:HttpErrorResponse)=>{
      console.log("esto es un error",error.status);
      return throwError(error);
    }));
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
