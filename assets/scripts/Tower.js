var Tower = function (img, bullet, range, shotspeed) {
    this.bullet = bullet;
    this.range = range;
    this.shotspeed = shotspeed;
    this.img = img;
    bullets.push(this.bullet);
}

Tower.prototype.shootBullet = function () {
    this.bullet.draw();
}

