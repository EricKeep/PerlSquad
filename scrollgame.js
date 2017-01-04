function gameinit() {
    //standard canvas and stage variables
    var canvas;
    var stage;
    //background image
    var bg;
    //keeps track of player score
    var score;
    // stores ship bitmaps
    var bmpList = [];
    var bitmap;
    // text display
    var txt;
    // is the game currently in play?
    var play;
    // game over text
    var gameTxt;
    // the mouse's current target
    var mouseTarget;
    // is the mouse being clicked?
    var clicked;
    // initializes the ship game
    
    canvas = game.getCanvas();
    stage = new game.getStage();
	score = 0;
	
	canvas.onmousedown = onMouseDown;
	canvas.onmouseup = onMouseUp;
	
	bg = new Image();
	bg.src = "rainforest.jpg";
	bg.onload = setBG;
	
	var toucan = new Image();
	toucan.src = "toucan.png";
	toucan.name = "toucan";
	toucan.onload = createAnimals;
	
	var sheep = new Image();
	sheep.src = "sheep.png";
	sheep.name = "sheep";
	sheep.onload = createAnimals;

    function setBG(event){
        var bgrnd = new createjs.Bitmap(bg);
        stage.addChild(bgrnd);
        stage.update();
        
        txt = new createjs.Text ("Score: 0", "24px Arial", "#000");
        txt.textBaseline="top";
        txt.x = 800;
        txt.y = 20;
        play=true;
        stage.addChild(txt);
    }
    function createAnimals(event){
        var image = event.target;
        var container = new createjs.Container();
        stage.addChild(container);
        var l = 4;
        for (var i=0; i<l; i++){
            bitmap = new createjs.Bitmap(image);
            container.addChild(bitmap);
            bitmap.name=image.name;
            resetAnimal(bitmap);
            bitmap.regX = bitmap.image.width/2|0;
            bitmap.regY = bitmap.image.height/2|0;
            bitmap.mouseEnabled = true;
            bmpList.push(bitmap);
        }

        
        createjs.Ticker.addEventListener("tick", tick);
    }
    function resetAnimal(animal){
        animal.x = canvas.width + Math.random()*500;
        animal.y = canvas.height * Math.random()|0;
        animal.speed = (Math.random()*8)+6;
    }
    // ticker function for animation
    function tick(){
        //check for clicking
        if (!clicked && stage.mouseX && stage.mouseY){
            mouseTarget = stage.getObjectUnderPoint(stage.mouseX, stage.mouseY);
        }
        if (clicked && mouseTarget){
            var tempText = String(mouseTarget.name);
            if (tempText=="sheep"){
                resetAnimal(mouseTarget);
                score-=50;
                if (score < 0){ // prevent negative score
                    score = 0;
                }
                clicked=false;
            }
            else if (tempText=="toucan"){
                resetAnimal(mouseTarget);
                score+=50;
                clicked=false;
            }
        }
        //moving the ships
        if (play == true){
            var l=bmpList.length;
            for(var i=0; i<l; i++){
                var bmp = bmpList[i];
                if (bmp.x > -200){
                    bmp.x -= bmp.speed;
                }else{
                    if (bmp.name == "toucan"){
                        gameOver();
                        console.log("game over");
                    }
                    else{
                        resetAnimal(bmp);
                    }
                }
            }
        }
        txt.text = "Score: "+score;
        stage.update();
    }
    //function used for a game over
    function gameOver(){
        gameTxt = new createjs.Text("Game Over\n\n", "36px Arial", "#000");
        gameTxt.text += "Click to play again";
        gameTxt.textAlign = "center";
        gameTxt.x = canvas.width/2;
        gameTxt.y = canvas.height/3;
        stage.addChild(gameTxt);
        play=false;
        var l=bmpList.length;
        for(var i=0; i<l; i++){
            var bmp = bmpList[i];
            resetAnimal(bmp);
        }
        stage.update();
        canvas.onclick = game.progress();
        
    }

    // response to a click after a game over
    var handleClick = function(){
        canvas.onclick=null;
        stage.removeChild(gameTxt);
        score=0;
        
        play=true;
    }

    //on a click down
    var onMouseDown = function(){
        if(!e){var e = window.event;}
        clicked = true;
    }
    // on click release
    var onMouseUp = function (){
        clicked = false
    }
}