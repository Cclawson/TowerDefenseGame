var map = [];
var path = {};

function buildAll() {

    titleScreen = new createjs.Bitmap(loader.getResult("title"));
    instructionScreen = new createjs.Bitmap(loader.getResult("instruction"));
    backgroundScreen = new createjs.Bitmap(loader.getResult("bg"));

    gameoverScreen = new createjs.Bitmap(loader.getResult("gameover"));

    inBtn = new createjs.Bitmap(loader.getResult("inBtn"));
    menuBtn = new createjs.Bitmap(loader.getResult("menuBtn"));
    playBtn = new createjs.Bitmap(loader.getResult("playBtn"));


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

    stage.on("stagemousemove", function (evt) {
        mousetext.text = "X: " + roundToTenth(evt.stageX) + " Y: " + roundToTenth(evt.stageY);
    });

    //append to stage
    stage.addChild(titleScreen);
    stage.addChild(instructionScreen);
    stage.addChild(backgroundScreen);
    buildMap();
    stage.addChild(gameoverScreen);
    stage.addChild(playBtn);
    stage.addChild(inBtn);
    stage.addChild(menuBtn);
    stage.addChild(timertext);
    stage.addChild(scoretext);
    stage.addChild(mousetext);


    hideAll();
    showTitle();
}

function buildMap() {
    var groundTile = new createjs.Bitmap(loader.getResult("groundTile"));
    var pathTile = new createjs.Bitmap(loader.getResult("pathTile"));
    path = new PathList();

    for (var i = 0; i < 9; i++) {
        map[i] = [];
        for (var j = 0; j < 9; j++) {
            map[i][j] = {};
            map[i][j] = groundTile.clone();
            map[i][j].y = j * 64;
            map[i][j].x = i * 64;
            stage.addChild(map[i][j]);
        }
    }

    let pathPoints = [[0, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 7], [3, 7], [3, 6], [3, 5], [3, 4], [3, 3], [3, 2], [3, 1], [4, 1], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [6, 7], [7, 7], [7, 6], [7, 5], [7, 4], [7, 3], [7, 2], [7, 1], [8, 1]];

    for (var j = 0; j < pathPoints.length; j++) {
        var nextTile = pathTile.clone();
        nextTile.x = pathPoints[j][0] * 64;
        nextTile.y = pathPoints[j][1] * 64;
        path.add(nextTile);
        stage.addChild(nextTile);
    }

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