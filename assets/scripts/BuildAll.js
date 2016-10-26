var map = [];
var path = {};

function buildAll() {
    collisionMethod = ndgmr.checkPixelCollision;

    titleScreen = new createjs.Bitmap(loader.getResult("title"));
    instructionScreen = new createjs.Bitmap(loader.getResult("instruction"));
    backgroundScreen = new createjs.Bitmap(loader.getResult("bg"));

    gameoverScreen = new createjs.Bitmap(loader.getResult("gameover"));

    inBtn = new createjs.Bitmap(loader.getResult("inBtn"));
    menuBtn = new createjs.Bitmap(loader.getResult("menuBtn"));
    playBtn = new createjs.Bitmap(loader.getResult("playBtn"));

    tower = new createjs.Bitmap(loader.getResult("tower"));
    bullet = new createjs.Bitmap(loader.getResult("bullet"));
    enemySprite = new createjs.Bitmap(loader.getResult("enemySprite"));

    greenTowerStore = new createjs.Bitmap(loader.getResult("greenTower"));
    blueTowerStore = new createjs.Bitmap(loader.getResult("blueTower"));
    redTowerStore = new createjs.Bitmap(loader.getResult("redTower"));
    store = new createjs.Bitmap(loader.getResult("store"));
    base = new createjs.Bitmap(loader.getResult("base"));

    //store

    store.x = 580;
    store.y = 0;

    redTowerStore.x = 585;
    redTowerStore.y = 200;

    blueTowerStore.x = 585;
    blueTowerStore.y = 310;

    greenTowerStore.x = 585;
    greenTowerStore.y = 420;

    base.x = 520;
    base.y = 60;


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
    scoretext.x = 600;
    scoretext.y = 100;


    lifetext = new createjs.Text("Life: 3", "20px Arial", "#000");
    lifetext.x = 600;
    lifetext.y = 50;

    mousetext = new createjs.Text("", "20px Arial", "#000");
    mousetext.x = 50;
    mousetext.y = 100;



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
    stage.addChild(mousetext);
    stage.addChild(store);
    stage.addChild(scoretext);
    stage.addChild(lifetext);
    stage.addChild(redTowerStore);
    stage.addChild(greenTowerStore);
    stage.addChild(blueTowerStore);
    stage.addChild(base);
    hideAll();
    showTitle();
}

function buildMap() {
    groundTile = new createjs.Bitmap(loader.getResult("groundTile"));
    pathTile = new createjs.Bitmap(loader.getResult("pathTile"));
    path = new PathList();

    let pathPoints = [
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6],
        [1, 7],
        [2, 7],
        [3, 7],
        [3, 6],
        [3, 5],
        [3, 4],
        [3, 3],
        [3, 2],
        [3, 1],
        [4, 1],
        [5, 1],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [5, 7],
        [6, 7],
        [7, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [7, 1],
        [8, 1]
    ];

    for (var i = 0; i < 9; i++) {
        map[i] = [];
        for (var j = 0; j < 9; j++) {
            if (!isPathPoint(i, j, pathPoints)) {
                map[i][j] = {};
                map[i][j] = groundTile.clone();
                map[i][j].y = j * 64;
                map[i][j].x = i * 64;
                map[i][j].on("click", function (x, y) {
                    return function () {
                        addTower(x * 64, y * 64);
                    }
                } (i, j));
                stage.addChild(map[i][j]);

            }
        }
    }

    for (var k = 0; k < pathPoints.length; k++) {
        var nextTile = pathTile.clone();
        nextTile.x = pathPoints[k][0] * 64;
        nextTile.y = pathPoints[k][1] * 64;
        path.add(nextTile);
        stage.addChild(nextTile);
    }
}

function isPathPoint(i, j, pathPoints) {
    var isPathPoint = false;
    pathPoints.forEach(function (point) {
        if (point[0] == i && point[1] == j) {
            isPathPoint = true;
        }
    });
    return isPathPoint;
}

function buildSprite() {

}

function displaySprites() { }

function hideAll() {
    instructionScreen.visible = false;
    inBtn.visible = false;
    titleScreen.visible = false;
    menuBtn.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = false;
    playBtn.visible = false;
    timertext.visible = false;
    lifetext.visible = false;
    scoretext.visible = false;
    mousetext.visible = false;
    blueTowerStore.visible = false;
    redTowerStore.visible = false;
    greenTowerStore.visible = false;
    store.visible = false;
    base.visible = false;
    // hideMap();
}

function hideMap() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            map[i][j].visible = false;
        }
    }
}

function showMap() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            map[i][j].visible = true;
        }
    }
}

function addTower(x, y) {
    var tow = tower.clone();
    tow.x = x;
    tow.y = y;

    var bull = bullet.clone();
    bull.x = tow.x;
    bull.y = tow.y;

    var b = new Bullet(bull);

    var t = new Tower(tow, b, 10, 6);
    stage.addChild(tow);

    towers.push(t);
}