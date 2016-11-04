var Tower = function (img, bullet, range, shotspeed) {
    var self = this;
    this.bullet = bullet;
    this.range = range;
    this.shotspeed = shotspeed;
    this.img = img;
    bullets.push(this.bullet);
    this.bullet.setParent(this);
    this.img.on("click", function () {
        if (selectedTower) {
            selectedTower.img.alpha = 1;
        }
        selectedTower = self;
        if (!self.upgraded) {
            showStore();
        }
        selectedTower.img.alpha = .5;
    });
    this.rangeGraphics;
    this.upgraded = false;
    //this.showRange();
}

Tower.prototype.shootBullet = function () {
    this.bullet.draw();
}

Tower.prototype.showRange = function () {
    if (!this.rangeGraphics) {
        this.rangeGraphics = new createjs.Graphics().beginFill("#ff0000").drawRect(this.img.x - (this.range + 32), this.img.y - (this.range + 32), this.range * 2, this.range * 2).endFill();
        rect = new createjs.Shape(this.rangeGraphics);
        rect.alpha = .3;
        stage.addChild(rect);
    }
    else {
        rect.graphics.clear().beginFill("#ff0000").drawRect(this.img.x - (this.range + 32), this.img.y - (this.range + 32), this.range * 2, this.range * 2).endFill();
        stage.update();
    }

}

