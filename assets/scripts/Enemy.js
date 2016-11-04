var Enemy = (function () {
    function Enemy(bitmap, health, speed) {
        this.bitmap = bitmap;
        this.health = health;
        this.speed = speed;
        this.currentNode = path.head;
        this.bitmap.x = this.currentNode.data.x + 32;
        this.bitmap.y = this.currentNode.data.y + 32;
        this.alive = true;
        this.frozen = 0;
    }

    return Enemy;
})();
