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
            updateTimer();
            updateScore();
            checkMovement();
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


function checkMovement() {
    bullets.forEach(function(bullet) {
        bullet.update(enemies[0]);
    }, this);

    enemies.forEach(function(enemy) {
        enemy.x -= 4;

        if (enemy.x <= 0) {
            enemy.x = 500;
        }
    })
}

function startLoop() {

    createjs.Ticker.addEventListener('tick', loop);
    createjs.Ticker.setFPS(FPS);

    gamestate = GAMESTATES.TITLE;
}