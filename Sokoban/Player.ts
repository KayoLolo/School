export class Player {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

   

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public move(dx: number, dy: number, width: number, height: number): void {
        const newX = this.x + dx;
        const newY = this.y + dy;

        // Vérifier si le nouveau mouvement est à l'intérieur des limites du jeu
        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            this.x = newX;
            this.y = newY;
        }
    }

    
}