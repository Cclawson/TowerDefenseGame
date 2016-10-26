function startScore() {
    score = 1000;
    scoretext.visible = true;
    scoretext.text = "Score: " + score;
}

function updateScore() {
    score += 150;
    scoretext.text = "Score: " + score;
}

function buyTower() {
    score -= 300;
    scoretext.text = "Score: " + score;
}