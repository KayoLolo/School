import Drawer from "./Drawer";

export class Hole {
    public x: number;
    public y: number;
    public filled: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.filled = false; // Un trou est vide par défaut
    }

    public fill(): void {
        this.filled = true; // Remplit le trou
    }

}