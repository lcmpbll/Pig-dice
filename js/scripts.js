// BUSINESS LOGIC
//Game

//Players
function Player(dieRoll, tempScore, totalScore) {
  this.dieRoll = dieRoll;
  this.tempScore = tempScore;
  this.totalScore = totalScore;
}

//Dice
Player.prototype.rollDice = function() {
  this.dieRoll = 1 + Math.floor(Math.random() * 6);
	return this.dieRoll;
}

//Score
Player.prototype.scoreAdder = function(dieRoll) {
	let tempScore = 0;
	let scoreArray = []
	scoreArray.push(dieRoll);
	if (dieRoll != 1 ){
	for(let index = 0; index < scoreArray.length; index ++){
	this.tempScore += scoreArray[index];}
	} else {tempScore = 0
	scoreArray = [];}
	return this.tempScore;
	};
	

Player.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
	
}

Player.prototype.bust = function(tempScore) {
 if (tempScore === 0) {
	this.totalScore = 0
 } return this.totalScore;
}
    
Player.prototype.win = function() {
if (this.totalScore >= 100){
  alert ('You Win!');
  }
};



// UI LOGIC