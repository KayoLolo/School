import Drawer from "./Drawer.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
    }
    refreshScore() {
        let score = document.getElementById("score");
        if (score != null)
            score.innerHTML = "0";
    }
    drawRectangle(x, y, color) {
        this.drawer.drawRectangle(x, y, color); // Appel à la méthode de Drawer
    }
    drawCircle(x, y, color) {
        this.drawer.drawCircle(x, y, color); // Appel à la méthode de Drawer
    }
    draw(game) {
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
    clear() {
        this.drawer.clear();
    }
}
