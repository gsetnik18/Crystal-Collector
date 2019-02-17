console.log("Sup Bitch");
//Set global variables for crystal values, wins, losses, target value, user score
//A game start will store random values of 1-12 in each of the crystals
//Clicking on a crystal will add that crystal's value to user score
//If user score == target value, win count goes up by 1, and game resets
//If user score > target value, loss count goes up by 1, and game resets
//If win count > loss count && win count > 10, user wins - alert win
//If win count < loss count && loss count > 5, user loses - alert "You're Fired"

//GLOBAL VARIABLES
var crystal1Value = '0';
var crystal2Value = '0';
var crystal3Value = '0';
var crystal4Value = '0';
var winCount = '0';
var lossCount = '0';
var dailyQuota = '0';
var userScore = '0';
var gameStarted = 'false';

console.log(crystal1Value);

//Game Start
