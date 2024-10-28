import { CarteType } from "./CarteType";

export class Cartes{
    private num:number;
    private type:CarteType;

    constructor(num:number, type:CarteType){
        this.num=num
        this.type=type;
    }

    
    public display():string{
        return `${this.num}:de:${this.type}`
    }

    

}