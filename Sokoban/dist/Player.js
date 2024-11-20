export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    move(dx, dy, width, height) {
        const newX = this.x + dx;
        const newY = this.y + dy;
        // Vérifier si le nouveau mouvement est à l'intérieur des limites du jeu
        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            this.x = newX;
            this.y = newY;
        }
    }
}
