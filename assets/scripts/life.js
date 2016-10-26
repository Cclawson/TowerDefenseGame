function startLife() {
    life = 3;
    lifetext.visible = true;
}

function updateLife() {
    life -= 1;
    lifetext.text = "Life: " + life;
    if (life <= 0) {
        gamestate = GAMESTATES.GAMEOVER;
    }
}