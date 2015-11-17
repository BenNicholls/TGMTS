angular.module('demoApp', [])
	.controller('SimCtrl', function () {
		this.title = 'Toronto Maple Leafs Trade Simulator';
		this.tradescreen = false
		this.tradeplayer = ""
		this.traderesult = ""
		this.score = 0

		//Name, age, status
		this.roster = [
			{name:"Mark Arcobello", age:27, stat:0},
			{name:"Jonathan Bernier", age:27, stat:0},
			{name:"Brad Boyes", age:33, stat:0},
			{name:"Tyler Bozak", age:29, stat:0},
			{name:"Rich Clune", age:28, stat:0},
			{name:"Byron Froese", age:24, stat:0},
			{name:"Jake Gardiner", age:25, stat:0},
			{name:"Michael Grabner", age:28, stat:0},
			{name:"Scott Harrington", age:22, stat:0},
			{name:"Peter Holland", age:25, stat:0},
			{name:"Matt Hunwick", age:30, stat:0},
			{name:"Nazem Kadri", age:25, stat:0},
			{name:"Leo Komarov", age:29, stat:0},
			{name:"Joffrey Lupul", age:32, stat:0},
			{name:"Martin Marincin", age:23, stat:0},
			{name:"Shawn Matthias", age:27, stat:0},
			{name:"P.A. Parenteau", age:32, stat:0},
			{name:"Dion Phaneuf", age:30, stat:0},
			{name:"Roman Polak", age:29, stat:0},
			{name:"James Reimer", age:27, stat:0},
			{name:"Morgan Rielly", age:21, stat:0},
			{name:"Nick Spaling", age:27, stat:0},
			{name:"James van Riemsdyk", age:26, stat:0},
			{name:"Daniel Winnik", age:30, stat:0}
		 ];

		 //status name, associated BS class
		 this.statuses = [
		 	["playing", "success"],
		 	["dead", "danger"],
		 	["injured", "warning"],
		 	["misc", "info"]
		 ];
		
		 this.Trade = function (name) {
		 	if (!this.tradescreen) {
		 		this.tradescreen = true
		 	}
		 	this.tradeplayer = name;

	 		//find player in roster and kill them, or give out some skate blades
		 	for (var i = this.roster.length - 1; i >= 0; i--) {
		 		if (this.roster[i].name == name) {
		 			if (Math.floor(Math.random()*2)==0) {
		 				this.roster[i].stat = 1;
		 				this.traderesult = "Oops they died!";
		 			} else {
		 				this.roster[i].stat = 3;
		 				this.traderesult = "You got a bag of Ron Hextall's old skate guards.";
		 				this.score = this.score + 1;
		 			}
		 		}
		 		
		 	};
		 }

	});