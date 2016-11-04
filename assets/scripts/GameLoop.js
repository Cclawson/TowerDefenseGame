function loop() {

    //state machine for GameState (instruction, startgame, start level, In game, construct, hold)
    switch (gamestate) {
        case GAMESTATES.CONSTRUCT:
            break;
        case GAMESTATES.TITLE:
            break;
        case GAMESTATES.INSTRUCTION:
            break;
        case GAMESTATES.STARTGAME:
            startGame();
            break;
        case GAMESTATES.INGAME:
            tickerRunning = true;
            updateTimer();
            updateTowerText();
            checkMovement();
            enemyTick();
            break;
        case GAMESTATES.NEXTLEVEL:
            reset()
            levelNum++;
            console.log(levels);
            buildMap(levels[levelNum]);
            hideMap();
            showLevelTransition();
            gamestate = GAMESTATES.HOLD;
            //Pause here to show level transition screen. Continue button triggers startlevel
            break;
        case GAMESTATES.GAMEOVER:
            hideAll();
            showGameOver();
            gamestate = GAMESTATES.HOLD;
            break;
        case GAMESTATES.HOLD:
            break;
    }

    stage.update();
}

function reset() {
    hideAll();

    enemyCount = 0;
    bullets.forEach(function (bullet) {
        stage.removeChild(bullet.bulletBitmap);
    });
    enemies.forEach(function (enemy) {
        stage.removeChild(enemy.bitmap);
    });
    towers.forEach(function (tower) {
        stage.removeChild(tower.img);
    });

    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            stage.removeChild(map[i][j]);
        }
    }

    enemies = [];
    towers = [];
    bullets = [];
}

function cleanUpTheDead() {
    enemies.forEach(function (enemy) {
        if (!enemy.alive) stage.removeChild(enemy);
    });
}

function spawnEnemy() {
    let spawnedEnemy = new Enemy(enemySprite.clone(), 3, 4);
    spawnedEnemy.bitmap.regY = 32;
    spawnedEnemy.bitmap.regX = 32;
    enemyCount++;
    stage.addChild(spawnedEnemy.bitmap);
    enemies.push(spawnedEnemy);
}

function moveEnemies() {
    enemies.forEach(function (enemy, index) {
        if (enemy.alive) {
            moveToNext(enemy);

        } else {
            enemies.splice(index, 1);
        }
    });
}


function moveToNext(enemy) {
    if (enemy.currentNode.next) {
        let newX = enemy.currentNode.next.data.x + 32;
        let newY = enemy.currentNode.next.data.y + 32;
        if (newY > enemy.bitmap.y) {
            enemy.bitmap.y += enemy.speed;
            enemy.bitmap.rotation = 90;
        } else if (newY < enemy.bitmap.y) {
            enemy.bitmap.y -= enemy.speed;
            enemy.bitmap.rotation = -90;
        }
        if (newX > enemy.bitmap.x) {
            enemy.bitmap.x += enemy.speed;
            enemy.bitmap.rotation = 0;
        } else if (newX < enemy.bitmap.x) {
            enemy.bitmap.x -= enemy.speed;
            enemy.bitmap.rotation = 180;
        }
        if (newY == enemy.bitmap.y && newX == enemy.bitmap.x) {
            enemy.currentNode = enemy.currentNode.next;
        }
        stage.update();


        //Instead of setting this for each level, just have the base be at the end of the path
        //The else block below is called when the path is finished, aka, the base
        // var hitCastle = collisionMethod(enemy.bitmap, base);
        // if (hitCastle) {
        //     enemy.alive = false;
        //     stage.removeChild(enemy.bitmap);
        //     updateLife();
        // }
    } else {
        stage.removeChild(enemy.bitmap);
        enemy.alive = false;
        updateLife();
        //enemy reached end
    }

}

function enemyTick() {
    if (tickerRunning) {
        if (tickCount % ticksBetweenSpawns == 0) {
            //spawn enemy at initial square
            //trigger moveToNext on enemy
            //when it reaches the next tile, it will trigger itself to the next tile
            if (enemyCount <= 20) spawnEnemy();
            if (enemyCount >= 20 && enemies.length === 0) {


                gamestate = GAMESTATES.NEXTLEVEL;
            };

        }
        moveEnemies();
        stage.update();
        tickCount++;
    }
}


function checkMovement() {
    bullets.forEach(function (bullet) {
        bullet.update();
    }, this);

    towers.forEach(function (tower) {
        tower.shootBullet();
    })

}

function startLoop() {

    createjs.Ticker.addEventListener('tick', loop);
    createjs.Ticker.setFPS(FPS);

    gamestate = GAMESTATES.TITLE;
}