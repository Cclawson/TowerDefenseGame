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
            checkMovement();
            enemyTick();
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

function cleanUpTheDead() {
    enemies.forEach(function(enemy) {
        if (!enemy.alive) stage.removeChild(enemy);
    });
}

function spawnEnemy() {
    let spawnedEnemy = new Enemy(enemySprite.clone(), 5, 4);
    enemyCount++;
    stage.addChild(spawnedEnemy.bitmap);
    enemies.push(spawnedEnemy);
}

function moveEnemies() {
    enemies.forEach(function(enemy, index) {
        if (enemy.alive) {
            moveToNext(enemy);

        } else {
            console.log("herr");
            enemies.splice(index, 1);
        }
    });
}


function moveToNext(enemy) {
    if (enemy.currentNode.next) {
        let newX = enemy.currentNode.next.data.x;
        let newY = enemy.currentNode.next.data.y;
        if (newY > enemy.bitmap.y) {
            enemy.bitmap.y += enemy.speed;
        } else if (newY < enemy.bitmap.y) {
            enemy.bitmap.y -= enemy.speed;
        }
        if (newX > enemy.bitmap.x) {
            enemy.bitmap.x += enemy.speed;
        } else if (newX < enemy.bitmap.x) {
            enemy.bitmap.x -= enemy.speed;
        }
        if (newY == enemy.bitmap.y && newX == enemy.bitmap.x) {
            enemy.currentNode = enemy.currentNode.next;
        }
        stage.update();



        var hitCastle = collisionMethod(enemy.bitmap, base);
        if (hitCastle) {
            enemy.alive = false;
            stage.removeChild(enemy.bitmap);
            updateLife();
        }
    } else {
        stage.removeChild(enemy.bitmap);
        enemy.alive = false;
        //enemy reached end
    }

}

function enemyTick() {
    if (tickerRunning) {
        if (tickCount % ticksBetweenSpawns == 0) {
            //spawn enemy at initial square
            //trigger moveToNext on enemy
            //when it reaches the next tile, it will trigger itself to the next tile
            if (enemyCount < 100) spawnEnemy();
        }
        moveEnemies();
        stage.update();
        tickCount++;
    }
}


function checkMovement() {
    bullets.forEach(function(bullet) {
        bullet.update();
    }, this);

    towers.forEach(function(tower) {
        tower.shootBullet();
    })

}

function startLoop() {

    createjs.Ticker.addEventListener('tick', loop);
    createjs.Ticker.setFPS(FPS);

    gamestate = GAMESTATES.TITLE;
}