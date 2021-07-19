export class Shape{
  public _id:String;
  public type:String;
  public base?:Number;
  public height?:Number;
  public diameter?:Number;

  constructor(_id:String,type:String,base:Number,height:Number,diameter:Number) {
    this._id=_id;
    this.type=type;
    this.base=base;
    this.height=height;
    this.diameter=diameter;
   }
}

export class ShapeFactory extends Shape{
  area:Number;
  constructor(_id:String,type:String,base:Number,height:Number,diameter:Number,area:Number){
    super(_id,type,base,height,diameter);
    this.area=area;
  }
}
