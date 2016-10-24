var CANVAS_HEIGHT = 600;
var CANVAS_WIDTH = 800;
var FPS = 30;
var titleScreen, backgroundScreen, instructionScreen, gameoverScreen;
var inBtn, menuBtn, playBtn;
var timertext, scoretext;
var towers = [];
var bullets = [];
var enemies = [];
var score;
var startTime;
var gamestate;
var GAMESTATES = {
    CONSTRUCT: 0,
    TITLE: 1,
    INSTRUCTION: 2,
    STARTGAME: 3,
    INGAME: 4,
    GAMEOVER: 5,
    HOLD: 6
}
var stage, loader;

function handleComplete() {
    setupCanvas();
    buildAll();
    startLoop();
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
    },
    {
        src: "scripts/Tower" + jsEnd
    },
    {
        src: "scripts/Bullet" + jsEnd
    },
    {
        src: "scripts/Enemy" + jsEnd
    },
    {
        src: "images/title.png",
        id: "title"
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
    },
    {
        src: "images/tower1.png",
        id: "tower"
    },
    {
        src: "images/bullet1.png",
        id: "bullet"
    }
    ];

    loader = new createjs.LoadQueue(true, "assets/");
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);

})()