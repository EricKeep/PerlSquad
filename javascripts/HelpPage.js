var helpPagePic



/**
 *  @function eventHelpPage
 *  @param purpose
 *  @param checkStart
 *  Black Pop Up Box that explains how to load and play the game
 *  Explains game mechanics for minigames as well
 */
function eventHelpPage() {
	"use strict";
    /*
        help page container
        background
        text
        next button - goes to next page of help page
        ok button - closes help page
        add all above to container
        add container to stage
        onOk - remove container from stage and call eventStartMenu
    */
	var help_container = new createjs.Container();
	/*var help_container_background = new createjs.Shape();
	help_container_background.graphics.beginFill("#D3D3D3").drawRect(game.getStage().width/2 - 300, game.getStage().height/2 - 150, 600, 300);*/

	var HelpPageText = new createjs.Text("How Do You ... ?", "40px Arial", "#000000");
	HelpPageText.x = game.getStage().width/2;
	HelpPageText.y = 110;
	HelpPageText.textAlign = "center";
	HelpPageText.textBaseline = "middle";

/*
	var help_playgame_button  = new RectButton("Add Image", "#000000", game.getStage().width/2 - 150, 150, 300, 50, "#D3D3D3", "click", playgameClicked);
	var help_editimage_button   = new RectButton("Edit Image", "#000000", game.getStage().width/2 - 150, 225, 300, 50, "#D3D3D3", "click", editimageClicked);
	var help_backbutton_button   = new RectButton("Game Mechanics", "#000000", game.getStage().width/2 - 150, 300, 300, 50, "#D3D3D3", "click", backbuttonClicked);
*/
	var help_playgame_button = new RectButton("Play the Game", "#f44336", game.getStage().width/2 - 150, 150, 300, 50, "#212121", "click", playgameClicked);
    var help_editimage_button = new RectButton("Edit an Image", "#00e676", game.getStage().width/2 - 150, 225, 300, 50, "#212121", "click", editimageClicked);
	var help_backbutton_button = new RectButton("Back", "#ff9100", game.getStage().width/2 - 150, 300, 300, 50, "#212121", "click", backbuttonClicked);

	//var help_playgame_button  = new HelpButton1("Add Image", "20px Arial", "#000000", "#A9A9A9", game.getStage().width/2 - 150, 150, 300, 50, "click", playgameClicked);
	//var help_editimage_button = new HelpButton1("Edit Image", "20px Arial", "#000000", "#A9A9A9", game.getStage().width/2 - 150, 225, 300, 50, "click", playgameClicked);
	//var help_backbutton_button  = new HelpButton1("Game Mechanics", "20px Arial", "#000000", "#A9A9A9", game.getStage().width/2 - 150, 300, 300, 50, "click", backbuttonClicked);

	help_container.addChild(HelpPageText, help_playgame_button.container, help_editimage_button.container, help_backbutton_button.container);
	game.getStage().addChild(help_container);
	game.getStage().update();
	
	function playgameClicked(){
		var help_subcontainer = new createjs.Container();
		help_subcontainer.on("dblclick", function(event) {
			help_container.removeChild(help_subcontainer);
			game.getStage().update();
		});
		
		var help_subcontainer_background = new createjs.Shape();
		help_subcontainer_background.graphics.beginFill("#000000").drawRect(game.getStage().width/2 - 300, game.getStage().height/2 - 150, 600, 300);
		
		//var HelpSubPageText = new createjs.Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\n\n\nimage here\n\n\n\n\n Double Click to Exit", "24px Arial", "#000000");
		var HelpSubPageText = new createjs.Text("\n\n\n\n\n\n\n\n\n\n Double Click Black Box Text Box to Exit", "30px Arial", "#ffffff");
		HelpSubPageText.x = game.getStage().width/2;
		HelpSubPageText.y = 100;
		HelpSubPageText.textAlign = "center";
		HelpSubPageText.textBaseline = "middle";

		help_subcontainer.addChild(help_subcontainer_background, HelpSubPageText);
		help_container.addChild(help_subcontainer);
		game.getStage().update();

	}
	
	function editimageClicked(){
		var help_subcontainer = new createjs.Container();
		help_subcontainer.on("dblclick", function(event) {
			help_container.removeChild(help_subcontainer);
			game.getStage().update();
		});

		var help_subcontainer_background = new createjs.Shape();
		help_subcontainer_background.graphics.beginFill("#000000").drawRect(game.getStage().width/2 - 300, game.getStage().height/2 - 150, 600, 300);

		//var HelpSubPageText = new createjs.Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\n\n\nimage here\n\n\n\n\n Double Click to Exit", "24px Arial", "#000000");
		var HelpSubPageText = new createjs.Text("\n\n\n\n\n\n\n\n\n\n Double Click Black Box Text Box to Exit", "30px Arial", "#ffffff");
		HelpSubPageText.x = game.getStage().width/2;
		HelpSubPageText.y = 100;
		HelpSubPageText.textAlign = "center";
		HelpSubPageText.textBaseline = "middle";

		help_subcontainer.addChild(help_subcontainer_background, HelpSubPageText);
		help_container.addChild(help_subcontainer);
		game.getStage().update();

	}
	
	function backbuttonClicked(){
	/*
		var help_subcontainer = new createjs.Container();
		help_subcontainer.on("dblclick", function(event) {
			help_container.removeChild(help_subcontainer);
			game.getStage().update();
		});

		var help_subcontainer_background = new createjs.Shape();
		help_subcontainer_background.graphics.beginFill("#000000").drawRect(game.getStage().width/2 - 300, game.getStage().height/2 - 150, 600, 300);
		var HelpSubPageText = new createjs.Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\n\n\nimage here\n\n\n\n\n Double Click to Exit", "24px Arial", "#000000");
		var HelpSubPageText = new createjs.Text("Click 'Start', then 'Default' To Play \n\nClick 'Browse' to load a different game file\n\n Click 'Upload' to load\n\n Then 'Done' when finished \n\n\n\n Double Click Black Box Text Box to Exit", "30px Arial", "#ffffff");
		HelpSubPageText.x = game.getStage().width/2;
		HelpSubPageText.y = 100;
		HelpSubPageText.textAlign = "center";
		HelpSubPageText.textBaseline = "middle";

		help_subcontainer.addChild(help_subcontainer_background, HelpSubPageText);
		help_container.addChild(help_subcontainer);
		game.getStage().update();
	*/
		game.getStage().removeChild(help_container);
		eventStartMenu();
	}


}













