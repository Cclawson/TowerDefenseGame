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

function showWinScreen() {
    winScreen.visible = true;
    menuBtn.visible = true;
}

function showLevelTransition() {
    continueBtn.visible = true;
    trans.visible = true;
    //levelTransitionScreen.visible = true;
}

function startGame() {
    backgroundScreen.visible = true;
    showBase();
    showMap();
    startScore();
    startLife();
    showStore();
    gamestate = GAMESTATES.INGAME;
}

function startLevel() {
    backgroundScreen.visible = true;
    showBase();
    startScore();
    startLife();
    showMap();
    showStore();
    gamestate = GAMESTATES.INGAME;

}

function showBase() {
    base.visible = true;
}