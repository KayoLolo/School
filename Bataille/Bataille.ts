import { Cartes } from "./Cartes"
import { CarteType } from "./CarteType";
import { Player } from "./Palyer";

export class Bataille{
    private maps:Cartes[]

    constructor(){
        this.maps=[]
    }

    public add_maps(num:number, name:string, type:CarteType):void{
        this.maps.push(new Cartes(num,name,type));
    }

}