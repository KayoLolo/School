import Drawer from "./Drawer.js";
import { Game } from "./Game.js";


export class Display{
    private drawer : Drawer;
  
    constructor(width:number, height:number, scale:number = 10) {
        this.drawer = new Drawer(width,height,scale)
    }

    
  
    public refreshScore(){
        let score : HTMLElement|null = document.getElementById("score");
        if(score!=null) score.innerHTML = "0";
    }

    public drawRectangle(x: number, y: number, color: string): void {
        this.drawer.drawRectangle(x, y, color); // Appel à la méthode de Drawer
    }

    public drawCircle(x: number, y: number, color: string): void {
        this.drawer.drawCircle(x, y, color); // Appel à la méthode de Drawer
    }
  
    public draw(game: Game): void {
        this.clear(); // Efface l'affichage avant de redessiner

        // Dessiner le joueur
        const player = game.getPlayer(); // Assurez-vous d'avoir une méthode getPlayer dans Game
        this.drawer.drawRectangle(player.x, player.y, 'blue'); // Couleur du joueur

        // Dessiner les rochers
        for (const rock of game.getRocks()) {
            this.drawer.drawRectangle(rock.x, rock.y, 'gray'); // Couleur des rochers
        }

        // Dessiner les trous
        for (const hole of game.getHoles()) {
            const color = hole.filled ? 'green' : 'brown'; // Couleur des trous
            this.drawer.drawCircle(hole.x, hole.y, color);
        }

        // Mettre à jour le score affiché
        this.refreshScore(); 
    }
    public clear(): void {

        this.drawer.clear(); 
    }


    
}