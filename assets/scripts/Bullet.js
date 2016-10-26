var Bullet = function (bulletBitmap) {
    this.startX = bulletBitmap.x;
    this.startY = bulletBitmap.y;
    this.bulletBitmap = bulletBitmap;
    this.velocity = 0;
    this.active = true;
    this.xVelocity = 1;
    this.yVelocity = 1;
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
    var angle = Math.floor(toDegrees(Math.atan(enemy.y / enemy.x)));
    if (this.active) {
        this.bulletBitmap.x += Math.ceil(Math.cos(angle));
        this.bulletBitmap.y += Math.ceil(Math.sin(angle));
    }
    this.active = this.active && this.inBounds();

    if (!this.inBounds()) {
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
