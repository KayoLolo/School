import { CarteType } from "./CarteType";

export class Cartes{
    private num:number;
    private name:string;
    private type:CarteType;

    constructor(num:number, name:string, type:CarteType){
        this.num=num
        this.name=name;
        this.type=type;
    }

    // public display():string{
    //     return `${this.name}:\naffected to:${this.person}\ntype:${TaskType[this.type]}`
    // }

    public create_maps():number{
        let nb_cartes:number=0
        for(let i=0; i<=52;i++){
            nb_cartes+=1
        }
        return nb_cartes
    }
}