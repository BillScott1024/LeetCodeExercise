
/**
 * test
 * 
 */
class Shape{
    area : number;
    color: string;
    name : string;
    constructor(name :string,width:number,height:number){
        this.area = width*height;
        this.color = "pink";
        this.name = name;
    };
    shoutout(){
        return "I am" + " " + this.color + "s " + this.name + "with an area of " + this.area + "cm squared";  
    }
} 