function buildAll() {

    titleScreen = new createjs.Bitmap(loader.getResult("title"));
    instructionScreen = new createjs.Bitmap(loader.getResult("instruction"));
    backgroundScreen = new createjs.Bitmap(loader.getResult("bg"));
    gameoverScreen = new createjs.Bitmap(loader.getResult("gameover"));

    inBtn = new createjs.Bitmap(loader.getResult("inBtn"));
    menuBtn = new createjs.Bitmap(loader.getResult("menuBtn"));
    playBtn = new createjs.Bitmap(loader.getResult("playBtn"));


    greenTowerStore = new createjs.Bitmap(loader.getResult("greenTower"))
    blueTowerStore = new createjs.Bitmap(loader.getResult("blueTower"))
    redTowerStore = new createjs.Bitmap(loader.getResult("redTower"))
    store = new createjs.Bitmap(loader.getResult("store"))
    //store

    store.x = 580;
    store.y = 0;

    redTowerStore.x = 585;
    redTowerStore.y = 200;
    
    blueTowerStore.x=585;
    blueTowerStore.y=310;

    greenTowerStore.x=585;
    greenTowerStore.y=420;



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
    lifetext.visible = false;
    scoretext.visible = false;
    mousetext.visible = false;
    blueTowerStore.visible = false;
    redTowerStore.visible = false;
    greenTowerStore.visible = false;
    store.visible = false;
}