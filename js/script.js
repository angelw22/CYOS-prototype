"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	// "Help": {
	// 	"Title": "Help",
	// 	"Subtitle": "Some useful Links",
	// 	"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	// },
	"Inventory": {
		"Title": "Things in bag",
		"Subtitle": "stuff stuff stuff",
		"Message": "",
	},
	"Map": {
		"Message": "<img src='image/objects/map.svg'/>"
	}
};

// function closeBag () {
// 	storage.bag = true;
// }

// Define the notifications used in the game
// let notifications = {
// 	"Welcome": {
// 		title: "Welcome",
// 		body: "This is the Monogatari VN Engine",
// 		icon: ""
// 	}
// };

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {
	"map" : "objects/map.png",
	"map_info" : "objects/map_info.png",
	"bag" : "objects/backpack.svg",
	"phone": "scenes/phone.png"
};

// Define the backgrounds for each scene.
const scenes = {
};

// Define the Characters
const characters = {
	"s": {
		"Name": "Siti",
		"Color": "#7030A0",
		"Images": {
			"Normal": "Siti-normal.png"
		}
	},
	"u": {
		"Name": "Utt",
		"Color": "#2F5597",
		"Images": {
			"Normal": "Utt-normal.png"
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		// "notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = "<font color='red'>" + input + "</font>";
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},

		"scene rgb(0,0,0) with fadeIn",
		"jump Kitchen",
		"centered <font color='white'>Mai Khao Beach Resort, Phuket, Thailand <br> 25 Dec 2018, 11:30pm</font>",
		"jump Market"

		// {
		// 	"Choice": {
		// 		"Dialog": "h Have you already read some documentation?",
		// 		"Yes": {
		// 			"Text": "Yes",
		// 			"Do": "jump Yes"
		// 		},
		// 		"No": {
		// 			"Text": "No",
		// 			"Do": "jump No"
		// 		}
		// 	}
		// }
	],

	"Market" : [
		"scene rgb(0,0,0)",
		"scene url(https://image.freepik.com/free-photo/blank-brown-wooden-table-front-blurred-market-background_32771-267.jpg) with fadeIn",
		"show u Normal left with slideInLeft",
		"u Thanks for the coffee treat <font color='#7030A0'>Siti</font> and {{player.Name}}.",
		
		"u It will keep me awake on my drive to the <font color='brown'> Rock Climbing Adventure Park.</font>",
		"show s Normal right with slideInRight",
		"s Please drive carefully, Utt.",
		{
			"Choice": {
				// "Dialog": "h Have you already read some documentation?",
				"Arrive": {
					"Text": "What time will you arrive?",
					"Do": "u The place is about 2 hours from here. So I say I will arrive around 1:30am tonight?"
				},
				"": {
					"Text": "How far is the place from here?",
					"Do": "u The place is about 2 hours from here. So I say I will arrive around 1:30am tonight?"
				}
			}
		},

		"u This is where I will be heading to in a bit..",

		function () {
			$_("[data-ui='map']").addClass("active");
		},
		function() {
			$_("[data-ui='inventory-button']").addClass("active")
			// $_("[data-action='open-bag']").addClass("flashing")
		},

		"u … Conquering a good ol’ mountain while you guys soak up more of Phuket’s sun!",
		

		"s Wow. It actually looks pretty far from the map… Stay safe man.",

		"u Yeah I will, don’t worry, got my safety gear all ready for the climb!",
		"s Alright, it is getting late. I think you had better make your way soon.",

		{
			"Choice": {
				"Go": {
					"Text": "Yeah, gosh, it is 11:30pm. <br> Better be on your way now.",
					"Do": "jump Go"
				},
				"Stay": {
					"Text": "I am sure you can stay for a while longer buddy.",
					"Do": "jump Stay"
				}
			}
		},
	],

	"Go" : [
		"u Yeah I better head off now. Don’t worry about me. I got my safety gear all ready for the climb! Bye guys!",
		"s Well {{player.Name}}, I guess we had better turn in early. We have an exciting programme tomorrow too!",
		"jump Resort"
	],

	"Stay" : [
		"u Nah, I think I had better run. It is getting dark.",
		"u Besides, there might be a jam if I take the short cut through the city centre via Seaview Boulevard and City Avenue.",
		"u The Cliffside Highway might be a much longer drive but it is certainly more scenic.",
		"s {{player.Name}}, we should turn in early too.",
		"s Let Utt make his way and we can head to bed early.",
		"Alright. I guess the tribe has spoken! Have a good time up there Utt.",
		"Siti and I will just take things slow by the beach.",
		"u Alright, bye guys! Don’t worry about me. I got my safety gear all ready for the climb!",
		"hide u Normal with slideOutLeft",
		"jump Resort"
	],

	"Resort" : [
		"scene rgb(0,0,0) with fadeIn",
		"centered <font color='white'>Mai Khao Beach Resort, Phuket, Thailand <br> 25 Dec 2018, 11:30pm</font>",
		function() {
			$_("[data-ui='inventory-button']").addClass("active")
			$_("[data-ui='3d-background']").addClass("lyingDown");
			$_("[data-ui='background']").hide();
			$_("#room-overlay").addClass("wake");
			return true;
		},
		"wait 4000",
		function () {
			$_("[data-ui='3d-background']").removeClass("lyingDown");
			$_("[data-ui='3d-background']").addClass("roomOrientation");
			return true;
		},
		"wait 3000",
		"show phone with phoneEnter",
		"wait 3000",

		"hide phone with phoneExit",
		"wait 2000",

		function () {
			$_("#room-overlay").removeClass("wake");
			$_("[data-ui='3d-background']").removeClass("roomOrientation");
			$_("[data-ui='3d-background']").addClass("roomWalk");
			return true;
		},
		"wait 4000", 
		function() {
			//clean up 
			$_("[data-ui='3d-background']").removeClass("roomWalk");
			$_(".bedroom-furniture").hide();
			$_("[data-ui='3d-background']").removeClass("bedroom")

		return true;
		},
		"jump Kitchen"
	],
		
	"Kitchen" : [
		function() {
			$_(".kitchen-furniture").show();
			$_("[data-ui='3d-background']").addClass("kitchen");
			$_("[data-ui='background']").hide();
			$_("#room-overlay").addClass("lights");
			$_("[data-ui='inventory-button']").addClass("active")
			return true;
		},
		"wait 1000", 
		function() {
			$_("#room-overlay").removeClass("lights");
			return true;
		},
		"wait 1500",
		function() {
			$_("[data-ui='3d-background']").addClass("kitchenWalk");
			return true;
		},
		"wait 4000",
		function() {
			$_("#article").addClass("glowing");
		},
		"wait 2000",
		function() {
			$_("#top-compartment").addClass("fridgeOpen");
			return true;
		},

	]



	// "Yes": [

	// 	"h That's awesome!",
	// 	"h Then you are ready to go ahead and create an amazing Game!",
	// 	"h I can't wait to see what story you'll tell!",
	// 	"end"
	// ],

	// "No": [

	// 	"h You can do it now.",

	// 	"display message Help",

	// 	"h Go ahead and create an amazing Game!",
	// 	"h I can't wait to see what story you'll tell!",
	// 	"end"
	// ]
};