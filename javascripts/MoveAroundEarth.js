/**  
 * @function eventMoveAroundEarth
 * Allows player to pick a biome to visit.
 */
function eventMoveAroundEarth() {
	"use strict";
    var timestamp = new Date();
	var moveOK;
    
    var moveText;
	function handleClick(event) {
        game.currentBiome = game.currentBiome.next;
		if (game.started === false) {
			moveText.text = "Biome: " + game.currentBiome.name + "\nClick the Player to Change Biomes\nClick OK to Edit";
		}
		else {
			moveText.text = "Biome: " + game.currentBiome.name + "\nClick the Player to Change Biomes\nClick OK to Visit";
		}
        console.log(game.currentBiome.name);
        playerIcon.x = game.currentBiome.x;
        playerIcon.y = game.currentBiome.y;
        game.getStage().update();
    }
    function onMoveOK(event) {
		// Analytics
		sendUserTimeInfo("biome-selection", timestamp);
        game.getMainContainer().removeChild(moveText);
        game.getMainContainer().removeChild(playerIcon);
        game.getMainContainer().removeChild(moveOK);
		playerIcon.removeAllEventListeners(); 
		if (game.started === false) {
			game.getStage().update();
			eventEditGame();
		}
		else {
			console.log("game.progress() called")
			game.progress();
		}
    }
	
    //	Build biome list
    var biomeList = new DoublyLinkedCycle();
    //dark green
    biomeList.add(1, "Deciduous Forest", 160, 115);
    //yellow
    biomeList.add(2, "Desert", 450, 170);
    //pink
    biomeList.add(3, "Grassland", 630, 105);
    //light green
    biomeList.add(4, "Rainforest", 215, 270);
    //weird green
    biomeList.add(5, "Tundra", 310, 20);
    console.log(biomeList.length);
	console.log(biomeList.head);
	console.log(biomeList.head.next);
	console.log(biomeList.tail);
    var playerIcon = game.getCurrentPlayer().getIcon();
    game.currentBiome = biomeList.head;
    playerIcon.x = game.currentBiome.x
    playerIcon.y = game.currentBiome.y;
    playerIcon.addEventListener("click", handleClick);
    
    moveText = new createjs.Text("Biome: " + game.currentBiome.name + "\nClick the Player to Change Biomes\nClick OK to Visit", "20px Arial", "#ff7700");
    moveText.textAlign    = "center";
	moveText.textBaseline = "middle";
    moveText.x = game.getStage().width/2;
    moveText.y = game.getStage().height - 50;
    
    
    moveOK = makeOKButton(890, 15, onMoveOK)
    
    game.getMainContainer().addChild(moveText);
    game.getMainContainer().addChild(moveOK);
    game.getMainContainer().addChild(playerIcon);
    game.getStage().update();
}


