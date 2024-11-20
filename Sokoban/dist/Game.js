import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Hole } from "./Hole.js";
import { Direction } from "./Direction.js";
export class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.dir = [];
        // Initialisation des éléments du jeu
        this.player = new Player(10, 10); // Position initiale du joueur
        this.rocks = this.generateRocks(3); // Un rocher à une position aleatoire
        this.holes = this.generateHoles(3); // Un trou à une position aléatoire
        this.score = 0;
        this.display.refreshScore(); // Rafraîchir le score (ou l'état du jeu)
        this.updateDisplay(); // Mettre à jour l'affichage avec les éléments
    }
    generateRocks(a) {
        const rocks = [];
        for (let i = 0; i < a; i++) {
            rocks.push(new Rock(Math.floor(Math.random() * 48 + 1), Math.floor(Math.random() * 48 + 1)));
        }
        return rocks;
    }
    generateHoles(a) {
        const holes = [];
        for (let i = 0; i < a; i++) {
            holes.push(new Hole(Math.floor(Math.random() * 48 + 1), Math.floor(Math.random() * 48 + 1)));
        }
        return holes;
    }
    getPlayer() {
        return this.player; // Retourne le joueur
    }
    getScore() {
        return this.score; // Retourne le score actuel
    }
    getLastDir() {
        return this.dir[this.dir.length - 1];
    }
    getRocks() {
        return this.rocks; // Retourne la liste des rochers
    }
    getHoles() {
        return this.holes; //Retourne la liste des trous
    }
    updateDisplay() {
        this.display.clear(); // Effacer l'affichage
        // Dessiner le joueur
        this.display.drawRectangle(this.player.x, this.player.y, 'blue'); // Couleur du joueur
        // Dessiner les rochers
        for (const rock of this.rocks) {
            this.display.drawRectangle(rock.x, rock.y, 'gray'); // Couleur des rochers
        }
        // Dessiner les trous
        for (const hole of this.holes) {
            const color = hole.filled ? 'green' : 'brown'; // Couleur des trous
            this.display.drawCircle(hole.x, hole.y, color);
        }
    }
    movePlayer(dx, dy) {
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;
        // Vérifier si le joueur peut se déplacer
        if (this.tryMovePlayer(newX, newY, dx, dy)) {
            this.updateDisplay(); // Mettre à jour l'affichage
        }
    }
    tryMovePlayer(newX, newY, dx, dy) {
        if (this.canMove(newX, newY)) {
            this.player.move(dx, dy, this.width, this.height); // deplace le joueur
            return true;
        }
        // condition de poussée
        const rockIndex = this.rocks.findIndex(rock => rock.x === newX && rock.y === newY);
        if (rockIndex !== -1) {
            const rock = this.rocks[rockIndex];
            const rowRocks = this.getRowRocks(rock.y);
            const pushedX = newX + dx; // nouvelle position de la pierre
            const pushedY = newY + dy;
            //Verifie si tous les rochers peuvent etre poussés en rangée
            if (this.canPushRow(rowRocks, dx, dy)) {
                this.pushRow(rowRocks, dx, dy); // Push the entire row of rocks
                this.player.move(dx, dy, this.width, this.height); // Move the player
                return true;
            }
            // condition de poussée dans un trou
            const holeIndex = this.holes.findIndex(hole => hole.x == pushedX && hole.y == pushedY);
            if (holeIndex !== -1) {
                const hole = this.holes[holeIndex];
                if (!hole.filled) {
                    rock.move(dx, dy); // pousse la pierre dans le trou
                    hole.fill(); // pose le trou comme rempli
                    this.player.move(dx, dy, this.width, this.height); // deplace le joueur
                    this.score++; // modifie le score
                    this.updateDisplay(); // met à jour l'affichage
                    this.rocks.splice(rockIndex, 1); // Rappelle le index et retire la pierre en fonction 
                    return true;
                }
            }
            else if (this.canMove(pushedX, pushedY)) {
                rock.move(dx, dy); //pouuse la pierre
                this.player.move(dx, dy, this.width, this.height); // deplace le joueur
                return true;
            }
        }
        return false;
    }
    canMove(newX, newY) {
        // Vérifier si le joueur peut se déplacer vers la nouvelle position
        for (const rock of this.rocks) {
            if (rock.x == newX && rock.y == newY) {
                return false; // Ne peut pas se déplacer sur un rocher
            }
        }
        for (const hole of this.holes) {
            if (hole.x == newX && hole.y == newY) {
                if (!hole.filled) {
                    return false; // Ne peut pas se déplacer sur un trou vide
                }
            }
        }
        return true; // Mouvement valide
    }
    getRowRocks(rowY) {
        return this.rocks.filter(rock => rock.y === rowY);
    }
    pushRow(rowRocks, dx, dy) {
        for (const rock of rowRocks) {
            rock.move(dx, dy); // Pousse tous les rochers en une rangée
        }
    }
    canPushRow(rowRocks, dx, dy) {
        for (const rock of rowRocks) {
            const newRockX = rock.x + dx;
            const newRockY = rock.y + dy;
            // Verifier si les positions sont valides
            if (!this.canMove(newRockX, newRockY)) {
                return false; // ne pousse pas si un seul ne peux pas bouger
            }
        }
        return true;
    }
    fillHole(holeIndex) {
        if (holeIndex >= 0 && holeIndex < this.holes.length) {
            this.holes[holeIndex].fill(); // Remplir le trou
            this.updateDisplay(); // Mettre à jour l'affichage après avoir rempli le trou
        }
    }
    initialize() {
        document.addEventListener('keydown', (event) => {
            let new_dir;
            switch (event.key) {
                case 'ArrowUp':
                    new_dir = Direction.UP;
                    this.movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                    new_dir = Direction.DOWN;
                    this.movePlayer(0, 1);
                    break;
                case 'ArrowLeft':
                    new_dir = Direction.LEFT;
                    this.movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                    new_dir = Direction.RIGHT;
                    this.movePlayer(1, 0);
                    break;
                default:
                    return; // Sortir si la touche n'est pas une flèche
            }
        });
    }
}
