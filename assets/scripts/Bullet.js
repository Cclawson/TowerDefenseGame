var Bullet = (function () {
    var self;
    function Bullet(bulletBitmap) {
        self = this;
        this.startX = bulletBitmap.x;
        this.startY = bulletBitmap.y;
        this.bulletBitmap = bulletBitmap;
        this.velocity = 0;
        this.active = true;
        this.xVelocity = 6;
        this.yVelocity = 6;
        this.width = 3;
        this.height = 3;
        this.color = "#000";
    }

    Bullet.prototype.inBounds = function () {
        return self.bulletBitmap.x >= 0 && self.bulletBitmap.x <= CANVAS_WIDTH &&
            self.bulletBitmap.y >= 0 && self.bulletBitmap.y <= CANVAS_HEIGHT;
    }

    Bullet.prototype.draw = function () {
        stage.addChild(self.bulletBitmap);
    };

    Bullet.prototype.update = function (enemy) {
        var angle = Math.toDegrees(Math.atan(enemy.y / enemy.x));
        if (self.active) {
            self.bulletBitmap.x += (self.xVelocity * 1) * Math.cos(Math.PI / 180 * angle);
            self.bulletBitmap.y += (self.yVelocity * 1) * Math.sin(Math.PI / 180 * angle);
        }
        self.active = self.active && self.inBounds();

        if (!self.inBounds()) {
            console.log(self.inBounds())
            self.bulletBitmap.x = self.startX;
            self.bulletBitmap.y = self.startY;
            self.active = true;
        }
    };

    return Bullet;
})();