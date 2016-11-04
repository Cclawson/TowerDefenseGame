function startLife() {
    life = 3;
    lifetext.visible = true;
    lifetext.text = life;
}

function updateLife() {
    life -= 1;
    lifetext.text = life;
    if (life <= 0) {
        enemyCount = 0;
        score = 1000;
        bullets.forEach(function(bullet) {
            stage.removeChild(bullet.bulletBitmap);
        });
        enemies.forEach(function(enemy) {
            stage.removeChild(enemy.bitmap);
        });
        towers.forEach(function(tower) {
            stage.removeChild(tower.img);
        });
        enemies = [];
        towers = [];
        bullets = [];
        gamestate = GAMESTATES.GAMEOVER;
    }
}