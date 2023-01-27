var rnumber1 = Math.floor(Math.random() * 6)+1;
var rdice1 = "images/dice" + rnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rdice1);

var rnumber2 = Math.floor(Math.random() * 6)+1;
var rdice2 = "images/dice" + rnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rdice2);

if (rnumber1 > rnumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if (rnumber2 > rnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
