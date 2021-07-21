import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalVariablesService {
  isCircle: boolean = false;
  isTriangle: boolean = false;
  isSquare: boolean = false;
  constructor() {}
}
