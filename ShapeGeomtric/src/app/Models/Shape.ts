export class Shape {
  public _id: string;
  public type: string;
  public base?: number;
  public height?: number;
  public diameter?: number;

  constructor(
    _id: string,
    type: string,
    base: number,
    height: number,
    diameter: number
  ) {
    this._id = _id;
    this.type = type;
    this.base = base;
    this.height = height;
    this.diameter = diameter;
  }
}
