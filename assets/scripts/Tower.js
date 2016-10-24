var Tower = (function () {
    var self;
    function Tower(img, bullet, range, shotspeed) {
        self = this;
        this.bullet = bullet;
        this.range = range;
        this.shotspeed = shotspeed;
        this.img = img;
        this.img.on("click",
            this.shootBullet
        );
    }

    Tower.prototype.shootBullet = function () {
        self.bullet.draw();
        bullets.push(self.bullet);
    }
    return Tower;
})()