var CANVAS_HEIGHT = 600;
var CANVAS_WIDTH = 800;
var FPS = 30;
var titleScreen, backgroundScreen, instructionScreen, gameoverScreen, trans;
var groundTile, pathTile;
var redTowerStore, greenTowerStore, blueTowerStore, store, base;
var inBtn, menuBtn, playBtn;
var timertext, scoretext, lifetext;
var towers = [];
var bullets = [];
var enemies = [];
var score;
var heart;
var startTime;
var gamestate;
var tickerRunning = false;
var tickCount = 0;
var enemyCount = 0;
var ticksBetweenSpawns = 50;
var collisionMethod;
var selectedTower;
var pathSpots = [];
var levels = [];
var dom = false
var levelNum = 0;
var GAMESTATES = {
    CONSTRUCT: 0,
    TITLE: 1,
    INSTRUCTION: 2,
    STARTGAME: 3,
    INGAME: 4,
    GAMEOVER: 5,
    HOLD: 6,
    NEXTLEVEL: 7,
}
var stage, loader;
var bgmusic;


function handleComplete() {
    setupCanvas();
    buildAll();
    startLoop();
}

function playSound(name) {
    bgmusic = createjs.Sound.play("bgmusic");
    createjs.Sound.volume = .1;
    bgmusic.loop = -1;
}


(function main() {

    var date = new Date();
    var cacheVersion = date.getTime();
    //var cacheVersion = 1;

    var jsEnd = ".js?a=" + cacheVersion;

    manifest = [{
        src: "scripts/CanvasSetup" + jsEnd
    }, {
        src: "scripts/KeyCommands" + jsEnd
    }, {
        src: "scripts/BuildAll" + jsEnd
    }, {
        src: "scripts/Timer" + jsEnd
    }, {
        src: "scripts/Score" + jsEnd
    }, {
        src: "scripts/GameLoop" + jsEnd
    }, {
        src: "scripts/Show" + jsEnd
    }, {
        src: "scripts/Round" + jsEnd
    }, {
        src: "scripts/Tower" + jsEnd
    }, {
        src: "scripts/Bullet" + jsEnd
    }, {
        src: "scripts/Enemy" + jsEnd
    }, {
        src: "scripts/store" + jsEnd
    }, {
        src: "scripts/life" + jsEnd
    }, {
        src: "scripts/PathList" + jsEnd
    }, {
        src: "scripts/Collision/ndgmr.Collision" + jsEnd
    }, {
        src: "images/title.png",
        id: "title"
    }, {
        src: "images/heart.png",
        id: "heart"
    }, {
        src: "images/trans.png",
        id: "trans"
    }, {
        src: "images/instruction.png",
        id: "instruction"
    }, {
        src: "images/gameover.png",
        id: "gameover"
    }, {
        src: "images/background.png",
        id: "bg"
    }, {
        src: "images/inbutton.png",
        id: "inBtn"
    }, {
        src: "images/menubutton.png",
        id: "menuBtn"
    }, {
        src: "images/playButton.png",
        id: "playBtn"
    }, {
        src: "images/continuebutton.png",
        id: "contBtn"
    }, {
        src: "images/tower0.png",
        id: "tower"
    }, {
        src: "images/tower1.png",
        id: "tower-red"
    }, {
        src: "images/tower2.png",
        id: "tower-blue"
    },
    {
        src: "images/tower3.png",
        id: "tower-green"
    },
    {
        src: "images/bullet1.png",
        id: "bullet"
    }, {
        src: "images/redTower.png",
        id: "redTower"
    }, {
        src: "images/blueTower.png",
        id: "blueTower"
    }, {
        src: "images/greenTower.png",
        id: "greenTower"
    }, {
        src: "images/store.png",
        id: "store"
    }, {
        src: "images/base.png",
        id: "base"
    }, {
        src: "images/towerDefense_tile118.png",
        id: "towerTileGrass"
    }, {
        src: "images/towerDefense_tile157.png",
        id: "pathTileGrass"
    }, {
        src: "images/towerDefense_tile054.png",
        id: "towerTileDirt"
    }, {
        src: "images/towerDefense_tile158.png",
        id: "pathTileDirt"
    }, {
        src: "images/towerDefense_tile159.png",
        id: "pathTileSteel"
    }, {
        src: "images/towerDefense_tile197.png",
        id: "towerTileSand"
    }, {
        src: "images/towerDefense_tile193.png",
        id: "pathTileSand"
    }, {
        src: "images/towerDefense_tile261.png",
        id: "towerTileSteel"
    }, {
        src: "images/enemyDom.png",
        id: "domBeatty"
    }, {
        src: "images/towerDefense_tile245.png",
        id: "enemySpriteGreen"
    }, {
        src: "images/towerDefense_tile246.png",
        id: "enemySpriteGray"
    }, {
        src: "images/towerDefense_tile247.png",
        id: "enemySpriteBrown"
    }, {
        src: "images/rocketAnimated.png",
        id: "rocketAnimated"
    }, {
        src: "sounds/dom.mp3",
        id: "domSound"
    }, {
        src: "sounds/intro.mp3",
        id: "intro"
    }, {
        src: "sounds/pain.mp3",
        id: "deathSound"
    }, {
        src: "images/loud.png",
        id: "loud"
    }, {
        src: "images/mute.png",
        id: "mute"
    }, {
        src: "sounds/bensound-epic.mp3",
        id: "bgmusic"
    }];

    createjs.Sound.alternateExtensions = ["mp3"];
    loader = new createjs.LoadQueue(true, "assets/");

    loader.installPlugin(createjs.Sound);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);

})()