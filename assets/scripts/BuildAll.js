function buildAll() {

    titleScreen = new createjs.Bitmap(loader.getResult("title"));
    instructionScreen = new createjs.Bitmap(loader.getResult("instruction"));
    backgroundScreen = new createjs.Bitmap(loader.getResult("bg"));
    gameoverScreen = new createjs.Bitmap(loader.getResult("gameover"));

    inBtn = new createjs.Bitmap(loader.getResult("inBtn"));
    menuBtn = new createjs.Bitmap(loader.getResult("menuBtn"));
    playBtn = new createjs.Bitmap(loader.getResult("playBtn"));

    tower = new createjs.Bitmap(loader.getResult("tower"));
    bullet = new createjs.Bitmap(loader.getResult("bullet"));

    tower.x = 100;
    tower.y = 100;

    bullet.x = tower.x;
    bullet.y = tower.y;

    var b = new Bullet(bullet);

    var t = new Tower(tower, b, 10, 6);

    towers.push(t);

    enemies.push(new Enemy());

    //Screens
    titleScreen.x = 0;
    titleScreen.y = 0;

    instructionScreen.x = 0;
    instructionScreen.y = 0;

    backgroundScreen.x = 0;
    backgroundScreen.y = 0;

    gameoverScreen.x = 0;
    gameoverScreen.y = 0;

    //Buttons
    //instructions button
    inBtn.x = 650;
    inBtn.y = 500;

    inBtn.on("click", function (evt) {
        hideAll();
        showInstructions();
    });

    //title button
    menuBtn.x = 650;
    menuBtn.y = 500;

    menuBtn.on("click", function (evt) {
        hideAll();
        showTitle();
    })

    //play Button
    playBtn.x = 530
    playBtn.y = 500;

    playBtn.on("click", function (evt) {
        hideAll();
        gamestate = GAMESTATES.STARTGAME;
    })

    //text
    timertext = new createjs.Text("", "20px Arial", "#000");
    timertext.x = 50;
    timertext.y = 50;

    scoretext = new createjs.Text("", "20px Arial", "#000");
    scoretext.x = 650;
    scoretext.y = 50;

    mousetext = new createjs.Text("", "20px Arial", "#000");
    mousetext.x = 50;
    mousetext.y = 100;

    //tower
    tower.x = 100;
    tower.y = 100;

    //append to stage
    stage.addChild(titleScreen);
    stage.addChild(instructionScreen);
    stage.addChild(backgroundScreen);
    stage.addChild(gameoverScreen);
    stage.addChild(playBtn);
    stage.addChild(inBtn);
    stage.addChild(menuBtn);
    stage.addChild(timertext);
    stage.addChild(scoretext);
    stage.addChild(mousetext);
    stage.addChild(tower);

    hideAll();
    showTitle();
}


function buildSprite() {

}

function displaySprites() {
}

function hideAll() {
    instructionScreen.visible = false;
    inBtn.visible = false;
    titleScreen.visible = false;
    menuBtn.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = false;
    playBtn.visible = false;
    timertext.visible = false;
    scoretext.visible = false;
    mousetext.visible = false;
}