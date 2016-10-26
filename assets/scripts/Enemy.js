var Enemy = (function () {
    function Enemy(bitmap, health, speed) {
        this.bitmap = bitmap;
        this.health = health;
        this.speed = speed;
        this.currentNode = path.head;
        this.bitmap.x = this.currentNode.data.x;
        this.bitmap.y = this.currentNode.data.y;
        this.alive = true;
    }

    return Enemy;
})();
