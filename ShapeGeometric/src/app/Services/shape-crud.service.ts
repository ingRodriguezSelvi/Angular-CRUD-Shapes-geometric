import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { config, Observable, throwError } from "rxjs";
import { Shape, ShapeFactory } from "../Models/Shape";
import { environment } from "src/environments/environment";
import { catchError, map } from "rxjs/operators";
import { error } from "@angular/compiler/src/util";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root",
})
export class ShapeCRUDService {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  // View List Shape //
  getListShape(): Observable<Shape[] | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: "*/*",
      }),
    };
    return this.http
      .get<Shape[]>(`${environment.API_URL}` + "api/Shape/", httpOptions)
      .pipe(
        map((res: Shape[]) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  // View a Shape //
  getShape(id: string): Observable<Shape | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: "*/*",
      }),
    };
    return this.http
      .get<Shape>(`${environment.API_URL}` + "api/Shape/" + id, httpOptions)
      .pipe(
        map((res: Shape) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  //Add new Shape///
  addShape(shape: Shape): Observable<Shape> {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: "*/*",
      }),
    };
    return this.http
      .post<Shape>(
        `${environment.API_URL}` + "api/Shape/addShape",
        shape,
        httpOptions
      )
      .pipe(
        map((res: Shape) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  // Get Area of Shape //
  getAreaShape(_id: string): Observable<ShapeFactory> {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: "*/*",
      }),
    };
    return this.http
      .get<ShapeFactory>(
        `${environment.API_URL}` + "api/Shape/area/" + _id,
        httpOptions
      )
      .pipe(
        map((res: ShapeFactory) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  //Edit a Shape //
  editShape(shape: Shape): Observable<Shape> {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: "*/*",
      }),
    };
    return this.http
      .put<Shape>(
        `${environment.API_URL}` + "api/Shape/" + shape._id,
        shape,
        httpOptions
      )
      .pipe(
        map((res: Shape) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  // Delete a Shape //
  deleteShape(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        accept: "*/*",
      }),
    };
    return this.http.delete(
      `${environment.API_URL}` + "api/Shape/" + id,
      httpOptions
    );
  }
}
