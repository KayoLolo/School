export class Hole {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.filled = false; // Un trou est vide par défaut
    }
    fill() {
        this.filled = true; // Remplit le trou
    }
}
