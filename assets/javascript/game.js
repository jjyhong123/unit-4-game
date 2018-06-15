// Initialize wins, losses, and score
var wins = 0;
var losses = 0;
var score = 0;

// Generate random number between 19 and 120
var targetNumber = Math.floor(Math.random() * 102) + 19;

// Display HTML
var updateHTML = function() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score").text(score);
    $("#target-number").text(targetNumber);
};
updateHTML();

// Store random numbers between 1 and 12 in an array
var randomNumberBank = [0,0,0,0];
for (i=0; i < randomNumberBank.length; i++) {
    randomNumberBank[i] = Math.floor(Math.random() * 12) + 1;
}

// Assign random number between 1 and 12 to each crystal
$("#crystal-1").attr("crystal-value", randomNumberBank[0]);
$("#crystal-2").attr("crystal-value", randomNumberBank[1]);
$("#crystal-3").attr("crystal-value", randomNumberBank[2]);
$("#crystal-4").attr("crystal-value", randomNumberBank[3]);

// Add button on click events to crystals
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("crystal-value"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;

    // Win
    if (score === targetNumber) {
        wins++;
        reset();
    }

    // Loss
    else if (score >= targetNumber) {
        losses++;
        reset();
    }

    updateHTML();
});

// Reset score, generate a random new number, and assign new values to crystals
var reset = function() {
    score = 0;

    targetNumber = Math.floor(Math.random() * 102) + 19;

    for (i=0; i < randomNumberBank.length; i++) {
        randomNumberBank[i] = Math.floor(Math.random() * 12) + 1;
    }

    $("#crystal-1").attr("crystal-value", randomNumberBank[0]);
    $("#crystal-2").attr("crystal-value", randomNumberBank[1]);
    $("#crystal-3").attr("crystal-value", randomNumberBank[2]);
    $("#crystal-4").attr("crystal-value", randomNumberBank[3]);
};
