export class Shape{
  public _id:string;
  public type:string;
  public base?:number;
  public height?:number;
  public diameter?:number;

  constructor(_id:string,type:string,base:number,height:number,diameter:number) {
    this._id=_id;
    this.type=type;
    this.base=base;
    this.height=height;
    this.diameter=diameter;
   }
}

export class ShapeFactory extends Shape{
  area:Number;
  constructor(_id:string,type:string,base:number,height:number,diameter:number,area:number){
    super(_id,type,base,height,diameter);
    this.area=area;
  }
}
