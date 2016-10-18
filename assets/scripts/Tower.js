var Tower = (function () {
    function Tower(img, bullet, range, shotspeed) {
        this.bullet = bullet;
        this.range = range;
        this.shotspeed = shotspeed;
        this.img = img;
    }

    Tower.prototype.shootBullet = function () {
        console.log(this.bullet);
    }
    return Tower;
})()

var t = new Tower("", "bullet1", 10, 3);
t.shootBullet();

console.log("here");