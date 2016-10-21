var Bullet = (function () {
    var self;
    function Bullet(img) {
        self = this;
        this.img = img;
        this.velocity = 0;
        this.active = true;
        this.xVelocity = 0;
        this.yVelocity = -I.speed;
        this.width = 3;
        this.height = 3;
        this.color = "#000";
    }

    Bullet.prototype.inBounds = function () {
        return self.x >= 0 && self.x <= CANVAS_WIDTH &&
            self.y >= 0 && self.y <= CANVAS_HEIGHT;
    }

    Bullet.prototype.draw = function () {
        canvas.fillStyle = self.color;
        canvas.fillRect(self.x, self.y, self.width, self.height);
    };

    Bullet.prototype.update = function () {
        self.x += self.xVelocity;
        self.y += self.yVelocity;

        self.active = self.active && self.inBounds();
    };

    return Bullet;
})()

var b = new Bullet("img1");
