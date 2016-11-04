function showTitle() {
    titleScreen.visible = true;
    inBtn.visible = true;
    playBtn.visible = true;
}

function showInstructions() {
    instructionScreen.visible = true;
    menuBtn.visible = true;
    playBtn.visible = true;
}

function showGameOver() {
    gameoverScreen.visible = true;
    menuBtn.visible = true;
    scoretext.visible = true;
}

function startGame() {
    backgroundScreen.visible = true;
    showBase();
    showMap();
    startTimer();
    startScore();
    startLife();
    showStore();
    gamestate = GAMESTATES.INGAME;
}

function showBase() {
    base.visible = true;
}