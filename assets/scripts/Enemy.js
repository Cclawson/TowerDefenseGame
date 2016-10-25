var Enemy = (function () {
    function Enemy(img, health, speed) {
        this.health = health;
        this.speed = speed;
        this.img = img;
        this.x = 500;
        this.y = 300;
        this.currentNode = path.head;
    }

    Enemy.prototype.moveToNext = function () {
        this.currentNode = this.currentNode.next;
        if (this.currentNode) {
            createjs.Tween.get(this, { override: true }).to({ x: this.currentNode.x, y: this.currentNode.y });
        } else {
            stage.removeChild(this);
        }
    }

    return Enemy;
})()