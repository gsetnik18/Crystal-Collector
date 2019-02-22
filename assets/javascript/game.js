//Set global variables for crystal values, wins, losses, target value, user score
//A game start will store random values of 1-12 in each of the crystals
//Clicking on a crystal will add that crystal's value to user score
//If user score == target value, win count goes up by 1, and game resets
//If user score > target value, loss count goes up by 1, and game resets
//If win count > loss count && win count > 10, user wins - alert win
//If win count < loss count && loss count > 5, user loses - alert "You're Fired"

//GLOBAL VARIABLES
//Crystal values
var crystal1Value = '0';
var crystal2Value = '0';
var crystal3Value = '0';
var crystal4Value = '0';
var dailyQuotaNum = '0';
//Crystal buttons for adding to score
var blackGem = $("<div>");
var grandGem = $("<div>");
var greaterGem = $("<div>");
var pettyGem = $("<div>");
//Score trackers
var winCount = 0;
var lossCount = 0;
var userScore = 0;
var current = 0;
//game states
var gameStart = '';
var reset = '';


//Game Start

gameStart = function () {

    $(".soul-gem-row").empty();

    dailyQuotaNum = Math.floor(Math.random() * 101) + 19;

    console.log(dailyQuotaNum);
    $("#daily-quota").html(dailyQuotaNum);

    for (var i = 0; i < 1; i++) {

        blackGem = $("<div>");
        grandGem = $("<div>");
        greaterGem = $("<div>");
        pettyGem = $("<div>");


        crystal1Value = Math.floor(Math.random() * 12) + 1;
        crystal2Value = Math.floor(Math.random() * 12) + 1;
        crystal3Value = Math.floor(Math.random() * 12) + 1;
        crystal4Value = Math.floor(Math.random() * 12) + 1;

        blackGem.attr({
            "class": 'soul-gem',
            "id": 'black-soulgem',
            "random-number": crystal1Value
        });
        $(".soul-gem-row").append(blackGem);
        grandGem.attr({
            "class": 'soul-gem',
            "id": 'grand-soulgem',
            "random-number": crystal2Value
        });
        $(".soul-gem-row").append(grandGem);
        greaterGem.attr({
            "class": 'soul-gem',
            "id": 'greater-soulgem',
            "random-number": crystal3Value
        });
        $(".soul-gem-row").append(greaterGem);
        pettyGem.attr({
            "class": 'soul-gem',
            "id": 'petty-soulgem',
            "random-number": crystal4Value
        });
        $(".soul-gem-row").append(pettyGem);

        $("#userScore").html(userScore);

        console.log(crystal1Value, crystal2Value, crystal3Value, crystal4Value);
    }
}

gameStart();

$(document).on('click' , "#black-soulgem" , function () {
    crystal1Value = parseInt($(this).attr('random-number'));
    userScore += crystal1Value;
    $("#userScore").html(userScore);
    console.log(userScore);
    if (userScore === dailyQuotaNum) {
        winCount++;
        $("#wins").html(winCount);
        userScore = 0;
        gameStart();
    }
    else if (userScore > dailyQuotaNum) {
        lossCount++;
        $("#losses").html(lossCount);
        $("#userScore").html(userScore);
        userScore = 0;
        gameStart();
    };
})

$(document).on('click', "#grand-soulgem" , function () {
    crystal2Value = parseInt($(this).attr('random-number'));
    userScore += crystal2Value;
    $("#userScore").html(userScore);
    console.log(userScore);
    if (userScore === dailyQuotaNum) {
        winCount++;
        $("#wins").html(winCount);
        userScore = 0;
        gameStart();
    }
    else if (userScore > dailyQuotaNum) {
        lossCount++;
        $("#losses").html(lossCount);
        $("#userScore").html(userScore);
        userScore = 0;
        gameStart();
    };
})

$(document).on('click', "#greater-soulgem" , function () {
    crystal3Value = parseInt($(this).attr('random-number'));
    userScore += crystal3Value;
    $("#userScore").html(userScore);
    console.log(userScore);
    if (userScore === dailyQuotaNum) {
        winCount++;
        $("#wins").html(winCount);
        userScore = 0;
        gameStart();
    }
    else if (userScore > dailyQuotaNum) {
        lossCount++;
        $("#losses").html(lossCount);
        $("#userScore").html(userScore);
        userScore = 0;
        gameStart();
    };
})

$(document).on('click', "#petty-soulgem" , function () {
    crystal4Value = parseInt($(this).attr('random-number'));
    userScore += crystal4Value;
    $("#userScore").html(userScore);
    console.log(userScore);
    if (userScore === dailyQuotaNum) {
        winCount++;
        $("#wins").html(winCount);
        userScore = 0;
        gameStart();
    }
    else if (userScore > dailyQuotaNum) {
        lossCount++;
        $("#losses").html(lossCount);
        $("#userScore").html(userScore);
        userScore = 0;
        gameStart();
    };
})