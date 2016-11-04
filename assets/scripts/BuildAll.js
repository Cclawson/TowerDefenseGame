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
    continueBtn = new createjs.Bitmap(loader.getResult("playBtn"));

    tower = new createjs.Bitmap(loader.getResult("tower"));
    bullet = new createjs.Bitmap(loader.getResult("bullet"));

    heart = new createjs.Bitmap(loader.getResult("heart"));
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

    redTowerStore.on("click", function () {
        if (selectedTower) {
            buyRedUpgrade();
        }
    })

    blueTowerStore.x = 585;
    blueTowerStore.y = 310;

    greenTowerStore.x = 585;
    greenTowerStore.y = 420;



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
    });

    continueBtn.x = 200;
    continueBtn.y = 200;
    continueBtn.on("click", function (evt) {
        startLevel();
    })

    //text
    timertext = new createjs.Text("", "20px Arial", "#000");
    timertext.x = 50;
    timertext.y = 50;

    scoretext = new createjs.Text("Score: 1000", "20px Arial", "#000");
    scoretext.x = 600;
    scoretext.y = 100;


    lifetext = new createjs.Text("3", "20px Arial", "#000");
    lifetext.x = 620;
    lifetext.y = 50;

    towertext = new createjs.Text("", "20px Arial", "#000");
    towertext.x = 585;
    towertext.y = 130;


    heart.x = 605;
    heart.y = 45;

    //append to stage
    stage.addChild(backgroundScreen);
    initLevels();
    buildMap(levels[levelNum]);
    stage.addChild(titleScreen);
    stage.addChild(instructionScreen);
    stage.addChild(gameoverScreen);
    stage.addChild(playBtn);
    stage.addChild(inBtn);
    stage.addChild(menuBtn);
    stage.addChild(continueBtn);
    stage.addChild(timertext);
    stage.addChild(store);
    stage.addChild(scoretext);
    stage.addChild(heart);
    stage.addChild(lifetext);
    stage.addChild(towertext);
    stage.addChild(redTowerStore);
    stage.addChild(greenTowerStore);
    stage.addChild(blueTowerStore);
    hideAll();
    showTitle();
}


function initLevels() {
    let levelOnePath = [
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

    let levelOneTowers = [
        [2, 0],
        [2, 6],
        [4, 8],
        [4, 2],
        [6, 0],
        [6, 6],
        [0, 4],
        [8, 4]
    ];

    let levelTwoPath = [
        [-1, 7],
        [0, 7],
        [1, 7],
        [2, 7],
        [3, 7],
        [4, 7],
        [5, 7],
        [6, 7],
        [7, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [7, 1],
        [6, 1],
        [5, 1],
        [4, 1],
        [3, 1],
        [2, 1],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [2, 5],
        [3, 5],
        [4, 5],
        [5, 5],
        [5, 4],
        [5, 3],
        [4, 3],
        [3, 3],
    ];

    let levelTwoTowers = [
        [0, 1],
        [5, 0],
        [0, 5],
        [2, 3],
        [6, 4],
        [3, 6],
        [4, 8],
        [8, 5],
        [1, 8]

    ];

    let levelThreePath = [
        [-1, 3],
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
        [4, 3],
        [5, 3],
        [6, 3],
        [7, 3],
        [7, 2],
        [7, 1],
        [6, 1],
        [5, 1],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [5, 7],
        [4, 7],
        [3, 7],
        [2, 7],
        [1, 7],
        [1, 6],
        [1, 5],
        [1, 4],
        [1, 3],
        [1, 2],
        [1, 1],
        [2, 1],
        [3, 1],
        [3, 2],
        [3, 3],
        [3, 4],
        [3, 5],
        [4, 5],
        [5, 5],
        [6, 5],
        [7, 5],
        [8, 5]
    ];

    let levelThreeTowers = [
        [2, 2],
        [6, 2],
        [4, 4],
        [2, 5],
        [3, 6],
        [6, 6],
        [7, 4],
        [4, 1],
        [0, 7],
        [3, 8]
    ];

    levels[0] = {};
    levels[0].pathPoints = levelOnePath;
    levels[0].towerSpots = levelOneTowers;
    levels[0].towerTile = new createjs.Bitmap(loader.getResult("towerTileGrass"));
    levels[0].pathTile = new createjs.Bitmap(loader.getResult("pathTileDirt"));
    levels[0].groundTile = new createjs.Bitmap(loader.getResult("pathTileGrass"));
    levels[0].enemy = new createjs.Bitmap(loader.getResult("enemySpriteGray"));

    levels[1] = {};
    levels[1].pathPoints = levelTwoPath;
    levels[1].towerSpots = levelTwoTowers;
    levels[1].towerTile = new createjs.Bitmap(loader.getResult("towerTileSand"));
    levels[1].pathTile = new createjs.Bitmap(loader.getResult("pathTileDirt"));
    levels[1].groundTile = new createjs.Bitmap(loader.getResult("pathTileSand"));
    levels[1].enemy = new createjs.Bitmap(loader.getResult("enemySpriteGreen"));

    levels[2] = {};
    levels[2].pathPoints = levelThreePath;
    levels[2].towerSpots = levelThreeTowers;
    levels[2].towerTile = new createjs.Bitmap(loader.getResult("towerTileSteel"));
    levels[2].pathTile = new createjs.Bitmap(loader.getResult("pathTileSand"));
    levels[2].groundTile = new createjs.Bitmap(loader.getResult("pathTileSteel"));
    levels[2].enemy = new createjs.Bitmap(loader.getResult("enemySpriteBrown"));
}

function buildMap(level) {
    // groundTile = new createjs.Bitmap(loader.getResult("groundTile"));
    // pathTile = new createjs.Bitmap(loader.getResult("pathTile"));
    enemySprite = level.enemy;
    groundTile = level.groundTile;
    pathTile = level.pathTile;
    towerTile = level.towerTile;
    path = new PathList();
    pathSpots = [];
    let pathPoints = level.pathPoints;

    for (var i = 0; i < 9; i++) {
        map[i] = [];
        for (var j = 0; j < 9; j++) {
            if (!isPathPoint(i, j, pathPoints)) {
                map[i][j] = {};
                map[i][j] = groundTile.clone();
                map[i][j].y = j * 64;
                map[i][j].x = i * 64;
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
        pathSpots.push(nextTile);
    }

    for (var i = 0; i < level.towerSpots.length; i++) {
        let towerSpot = level.towerSpots[i];
        stage.removeChild(map[towerSpot[0]][towerSpot[1]]);
        map[towerSpot[0]][towerSpot[1]] = towerTile.clone();
        map[towerSpot[0]][towerSpot[1]].y = towerSpot[1] * 64;
        map[towerSpot[0]][towerSpot[1]].x = towerSpot[0] * 64;
        map[towerSpot[0]][towerSpot[1]].on("click", function (x, y) {
            return function () {
                addTower(x * 64, y * 64);
            }
        } (towerSpot[0], towerSpot[1]));
        stage.addChild(map[towerSpot[0]][towerSpot[1]]);
    }

    let basePoint = pathPoints[pathPoints.length - 1];

    base.x = basePoint[0] * 64;
    base.y = basePoint[1] * 64;
    stage.addChild(base);

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
    continueBtn.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = false;
    playBtn.visible = false;
    timertext.visible = false;
    lifetext.visible = false;
    scoretext.visible = false;
    towertext.visible = false;
    blueTowerStore.visible = false;
    redTowerStore.visible = false;
    greenTowerStore.visible = false;
    store.visible = false;
    base.visible = false;
    heart.visible = false;
    hideMap();
}

function hideMap() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (map[i][j]) {
                map[i][j].visible = false;
            }
        }
    }

    for (var i = 0; i < pathSpots.length; i++) {
        pathSpots[i].visible = false;
    }
}

function showMap() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (map[i][j]) {
                map[i][j].visible = true;
            }
        }
    }

    for (var i = 0; i < pathSpots.length; i++) {
        pathSpots[i].visible = true;
    }
}

function addTower(x, y) {
    if (score - 300 >= 0) {
        var tow = tower.clone();
        tow.x = x + 32;
        tow.y = y + 32;
        tow.regX = tow.image.width / 2;
        tow.regY = tow.image.height / 2;
        var canplace = true;
        for (var tn = 0; tn < towers.length; tn++) {
            if (tow.x === towers[tn].img.x && tow.y === towers[tn].img.y) {
                tn = towers.length;
                canplace = false;
            }
        };
        if (canplace) {
            buyTower();
            var bull = bullet.clone();
            bull.x = tow.x;
            bull.y = tow.y;

            var b = new Bullet(bull);

            var t = new Tower(tow, b, 80, 6);
            stage.addChild(tow);
            towers.push(t);
        }

    }

}