var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 +".png";

var randomImageSource = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 wins, change h1 to display Player 1 Wins!
// elseif player 2 wins, change h1 to display Player 2 Wins!
// elseif result is a draw, change h1 to display Draw!

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {;
  document.querySelector("h1").innerHTML = "Draw!"
}
