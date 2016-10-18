    function loop() {

        //state machine for GameState (instruction, startgame, start level, In game, construct, hold)
        switch (gamestate) {
            case GAMESTATES.CONSTRUCT:
                break;
            case GAMESTATES.TITLE:
                break;
            case GAMESTATES.INSTRUCTION:
                break;
            case GAMESTATES.STARTGAME:
                startGame();
                break;
            case GAMESTATES.INGAME:
                updateTimer();
                score += 1;
                scoretext.text = "Score: " + score;
                checkMovement();
                break;
            case GAMESTATES.GAMEOVER:
                hideAll();
                showGameOver();
                gamestate = GAMESTATES.HOLD;
                break;
            case GAMESTATES.HOLD:
                break;
        }

        stage.update();
    }


    function checkMovement() {
        var charSpeed = 5;
        if (RightPressed) {
            walk.x += 5;
        }
        if (LeftPressed) {
            walk.x -= 5;
        }
        if(UpPressed){
            walk.y -= 5;
        }
        if(DownPressed){
            walk.y += 5;
        }
    }

    function startLoop() {

        createjs.Ticker.addEventListener('tick', loop);
        createjs.Ticker.setFPS(FPS);

        gamestate = GAMESTATES.TITLE;
    }