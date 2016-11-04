function showStore() {
    store.visible = true;
    blueTowerStore.visible = true;
    redTowerStore.visible = true;
    greenTowerStore.visible = true;
    towertext.visible = true;
}

function updateTowerText() {
    if (selectedTower) {
        towertext.text = "Range: " + selectedTower.range + "\n Bullet Type: " + selectedTower.bullet.type + "\n ShotSpeed: " + selectedTower.shotspeed;
    }
}

function buyRedUpgrade() {
    if (score >= 200 && selectedTower) {
        if (!selectedTower.upgraded) {
            score -= 200;
            scoretext.text = "Score: " + score;
            selectedTower.range += 40;
            selectedTower.img.image = loader.getResult("tower-red");
            selectedTower.upgraded = true;
            hideStore();
        }
    }
}

function hideStore() {
    blueTowerStore.visible = false;
    redTowerStore.visible = false;
    greenTowerStore.visible = false;
}