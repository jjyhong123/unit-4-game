# unit-4-game

A game where you try to match the randomly generated number by judiciously clicking on crystals with varying point values assigned to them. This was important mainly as an exercise in getting more comfortable with using jQuery. 

First, a target score between 19 and 120 was randomly generated. Next, point values between 1 and 12 were randomly generated and assigned as attributes to the four crystal images. An on-click event listener was then set up such that whenever a crystal image was clicked, its point value would be added to the current score. An if statement was created to reset the game and increment the wins/losses counter when the score reached/exceeded the target score.