var Bullet = (function () {
    var self;
    function Bullet(bulletBitmap) {
        self = this;
        self.startX = bulletBitmap.x;
        self.startY = bulletBitmap.y;
        self.bulletBitmap = bulletBitmap;
        self.velocity = 0;
        self.active = true;
        self.xVelocity = 6;
        self.yVelocity = 6;
        self.width = 3;
        self.height = 3;
        self.color = "#000";
    }

    Bullet.prototype.draw = function () {
        console.log(self);
        stage.addChild(self.bulletBitmap);
    };

    Bullet.prototype.update = function (enemy) {
        var angle = toDegrees(Math.atan(enemy.y / enemy.x));
        if (self.active) {
            self.bulletBitmap.x += (self.xVelocity * 1) * Math.cos(Math.PI / 180 * angle);
            self.bulletBitmap.y += (self.yVelocity * 1) * Math.sin(Math.PI / 180 * angle);
        }
        self.active = self.active && self.inBounds();

        if (!self.inBounds()) {
            self.bulletBitmap.x = self.startX;
            self.bulletBitmap.y = self.startY;
            self.active = true;
        }
    };

    Bullet.prototype.inBounds = function () {
        return self.bulletBitmap.x >= 0 && self.bulletBitmap.x <= CANVAS_WIDTH &&
            self.bulletBitmap.y >= 0 && self.bulletBitmap.y <= CANVAS_HEIGHT;
    }

    function toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    return Bullet;
})();