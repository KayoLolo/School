import { Cartes } from "./Cartes"
import { CarteType } from "./CarteType";
import { Player } from "./Palyer";

export class Deck{
    private decks:Cartes[]

    constructor(){
        this.decks=[]
    }

    public add_map(num:number, type:CarteType):void{
        this.decks.push(new Cartes(num,type));
    }

    public add_maps(num: number, type: CarteType): void {
        let decks = new Cartes(num, type);
        this.add_map(num, type);
    }

    public add_all_card(num: number, type: CarteType): void {
        let MyDeck = new Deck();
        for (let i = 1; i <= 13; i++) {
            MyDeck.add_maps(i, type); // Ajoute une carte au deck
        }
        console.log(MyDeck); 
    }
    
}