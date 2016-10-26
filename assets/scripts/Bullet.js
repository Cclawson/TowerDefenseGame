var Bullet = function (bulletBitmap) {
    this.startX = bulletBitmap.x;
    this.startY = bulletBitmap.y;
    this.bulletBitmap = bulletBitmap;
    this.velocity = 0;
    this.active = true;
    this.xVelocity = .1;
    this.yVelocity = .1;
    this.width = 3;
    this.height = 3;
    this.color = "#000";
    this.hasBeenDrawn = false;
}

Bullet.prototype.draw = function () {
    if (!this.hasBeenDrawn) {
        stage.addChild(this.bulletBitmap);
        this.hasBeenDrawn = true;
    }
};

Bullet.prototype.update = function (enemy) {
    var angle = Math.atan2(enemy.y - this.bulletBitmap.y, enemy.x - this.bulletBitmap.x);
    angle = toDegrees(angle);
    if (this.active) {
        var velocityX = Math.cos((angle) * Math.PI / 180) * (this.xVelocity * 1);
        var velocityY = Math.sin((angle) * Math.PI / 180) * (this.yVelocity * 1);

        this.bulletBitmap.x += velocityX;
        this.bulletBitmap.y += velocityY;
    }
    this.active = this.active && this.inBounds();

    var collision = collisionMethod(this.bulletBitmap, enemy);


    if (!this.inBounds() || collision) {
        this.bulletBitmap.x = this.startX;
        this.bulletBitmap.y = this.startY;
        this.active = true;
    }
};

Bullet.prototype.inBounds = function () {
    return this.bulletBitmap.x >= 0 && this.bulletBitmap.x <= CANVAS_WIDTH &&
        this.bulletBitmap.y >= 0 && this.bulletBitmap.y <= CANVAS_HEIGHT;
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}
