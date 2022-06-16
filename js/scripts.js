// BUSINESS LOGIC
//Game
function Game(){
	this.players = {};
	this.currentId = 0;
}
Game.prototype.addPlayer = function(player) {
	this.players[player.id] = player;
}
Game.prototype.assignId = function() {
	this.currentId +=1;
	return this.currentId;
}
//Players
function Player(dieRoll, tempScore, totalScore, ) {
  this.dieRoll = dieRoll;
  this.tempScore = tempScore;
  this.totalScore = totalScore;
	//this.scoreArray = scoreArray;
}
 
Player.prototype.newGame = function () {
	this.tempScore = 0;
	this.totalScore = 0;
	//this.scoreArray = []
}

//Dice
Player.prototype.rollDice = function() {
  this.dieRoll = 1 + Math.floor(Math.random() * 6);
	//this.scoreArray.push(this.dieRoll);
	//console.log(this.scoreArray);
	return this.dieRoll;
}

//Score
// Player.prototype.scoreAdder = function() {
// 	let tempScore = 0;
// 	if (this.dieRoll != 1 ){
// 	for(let index = 0; index < scoreArray.length; index ++){
// 	this.tempScore += scoreArray[index];}
// 	} else {tempScore = 0
// 	this.scoreArray = [];}
// 	return this.tempScore;
// 	};
//Score
// Player.prototype.scoreAdder = function() {
// 	let tempScore = 0;
// 	for(let index = 0; index < this.scoreArray.length; index ++){
//     if (this.scoreArray[index] != 1) {
// 	this.tempScore += this.scoreArray[index];
// }
// 	 else {this.tempScore = 0
// 	this.scoreArray = [];}
// }
// 	return this.tempScore;
// 	};
Player.prototype.scoreAdder = function() {
	if (this.dieRoll !== 1){
		this.tempScore += this.dieRoll;
	} else {
		this.tempScore = 0;
	}
	return this.tempScore;
};

	

Player.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
	
}

Player.prototype.bust = function(tempScore) {
 if (tempScore === 0) {
	this.totalScore = 0
//  } return this.totalScore;
} else {
	this.tempScore = this.roll + this.tempScore;
}
};
    
Player.prototype.win = function() {
if (this.totalScore >= 100){
  alert ('You Win!');
  }
};

// UI LOGIC

let game = new Game();

$(document).ready(function () {
	let player1 = new Player(0, 0, 0);
	$('button#p1Roll').click(function(event) {
		event.preventDefault();
		
		//player1.newGame();
		let player1DieRoll = player1.rollDice();
		$(".p1RollResult").text(player1DieRoll);
		let player1TempScore = player1.scoreAdder();
		console.log(player1TempScore);
		$(".p1Roll").html(player1.roll);
		$(".p1TurnTotal").text(player1.tempScore);
		$(".p1GrandTotal").html(player1.totalScore);
	});

	$('button#p1Hold').click(function (event) {
		event.preventDefault();
		player1.hold();
		player1.win();
		$(".p1TurnTotal").html("0");
		$(".p2Roll").html("0");
		$(".p1GrandTotal").html(player1.totalScore);
	});
	
});

// // Business Logic
// function Player() {
// 	this.dieRoll = 0;
// 	this.tempScore = 0;
// 	this.totalScore =0;
// }

// Player.prototype.rollDice = function() {
//   this.dieRoll = 1 + Math.floor(Math.random() * 6);
// 	return this.dieRoll;
// };

// Player.prototype.rollDice = function () {
// 	if (this.dieRoll === 1) {
// 		this.tempScore = 0;
// 	} else {
// this.tempScore = this.dieRoll + this.tempScore
// 	}
// };

// Player.prototype.win = function () {
// 	if (this.totalScore >= 100) {
// 		alert ("You Win!");
// 	}
// };

// let player1 = new Player();
// let player2 = new Player();

// //UI LOGIC

// $(document).ready(function() {
// 	$('button#p1Roll').click(function (event) {
// 		event.preventDefault();
// 		player1.rollDice();
// 		player1.rollPoints();
// 		$(".roll1").html(player1.dieRoll);
// 		$(".turnTotal1").html(player1.tempScore);
// 	})

// 	$('button#p1Hold').click(function (event) {
// 		event.preventDefault();
// 		player1.hold();
// 		player1.win();

// 	})
	

// });



