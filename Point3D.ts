import {Point2D} from "./point2D";

class Point3D extends Point2D{
    protected z:number

    constructor(x:number,
                y:number,
                z:number) {
        super(x,y);
        this.z = z
    }
    public getZ():number{
        return this.z;
    }
    public setZ(z:number):void{
        this.z = z
    }
    public getXYZ():object{
        return {x:this.x,y:this.y,z:this.z}
    }
    public setXYZ(x:number,y:number,z:number):void{
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
let p = new Point3D(1,3,4);
console.log(p)
