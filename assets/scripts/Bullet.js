var Bullet = function (bulletBitmap) {
    this.parent;
    this.startX = bulletBitmap.x - 32;
    this.startY = bulletBitmap.y - 32;
    this.bulletBitmap = bulletBitmap;
    this.active = false;
    this.xVelocity = 5;
    this.yVelocity = 5;
    this.xMod = 1;
    this.yMod = 1;
    this.hasBeenDrawn = false;
    this.type = "normal";
    this.cooldown = 0;
}

Bullet.prototype.draw = function () {
    if (!this.hasBeenDrawn) {
        stage.addChild(this.bulletBitmap);
        this.hasBeenDrawn = true;
    }
};

Bullet.prototype.setParent = function (tower) {
    this.parent = tower;
}

Bullet.prototype.update = function () {
    var enemyobj;
    for (var ene = 0; ene < enemies.length; ene++) {
        var enem = enemies[ene];
        if (this.checkEnemyDetection(enem)) {
            ene = enemies.length;
            enemyobj = enem;
        }
    }
    if (enemyobj && this.cooldown <= 0) {
        this.bulletBitmap.visible = true;
        var enemy = enemyobj.bitmap;
        var angle = Math.atan2(enemy.y - this.bulletBitmap.y - 32, enemy.x - this.bulletBitmap.x - 32);
        angle = toDegrees(angle);
        //this.parent.img.rotation = angle;
        //  if (!this.active) {
        var velocityX = Math.cos((angle) * Math.PI / 180) * (this.xVelocity * 1);
        var velocityY = Math.sin((angle) * Math.PI / 180) * (this.yVelocity * 1);

        if (velocityX < 0) {
            this.xMod = -1;
        } else {
            this.xMod = 1;
        }

        if (velocityY < 0) {
            this.yMod = -1;
        } else {
            this.yMod = 1;
        }

        this.bulletBitmap.x += velocityX;
        this.bulletBitmap.y += velocityY;
        this.active = true;
        //  } else {
        //     this.bulletBitmap.x += this.xMod * this.xVelocity;
        //     this.bulletBitmap.y += this.yMod * this.yVelocity;
        // }

        var collision;

        for (var en = 0; en < enemies.length; en++) {
            var enem = enemies[en];
            collision = collisionMethod(this.bulletBitmap, enem.bitmap);

            if (collision) {
                enem.health -= 1;
                if (enem.health <= 0) {
                    stage.removeChild(enem.bitmap);
                    enem.alive = false;

                    createjs.Sound.play("deathSound");
                    updateScore();
                }
                en = enemies.length;
                this.bulletBitmap.x = this.startX;
                this.bulletBitmap.y = this.startY;
                this.active = false;
                this.cooldown = 30;
            }
        }
        if (!this.inBounds()) {
            this.bulletBitmap.x = this.startX;
            this.bulletBitmap.y = this.startY;
            this.active = false;
            this.cooldown = 30;

        }
    } else {
        this.bulletBitmap.x = this.startX;
        this.bulletBitmap.y = this.startY;
        this.bulletBitmap.visible = false;
        this.active = false;
    }
    if (this.cooldown > 0) {
        this.cooldown -= 1;
    }
};

Bullet.prototype.inBounds = function () {
    return this.bulletBitmap.x >= (this.parent.img.x - this.parent.range) && this.bulletBitmap.x <= (this.parent.img.x + this.parent.range) &&
        this.bulletBitmap.y >= (this.parent.img.y - this.parent.range) && this.bulletBitmap.y <= (this.parent.img.y + this.parent.range)
}

Bullet.prototype.checkEnemyDetection = function (enemy) {
    return enemy.bitmap.x >= (this.parent.img.x - this.parent.range - 32) && enemy.bitmap.x <= (this.parent.img.x + this.parent.range + 32) &&
        enemy.bitmap.y >= (this.parent.img.y - this.parent.range - 32) && enemy.bitmap.y <= (this.parent.img.y + this.parent.range)
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}