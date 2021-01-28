//creatingRandomNumbers 
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6 +1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6 +1);

// addingRandomNumberToImage
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

// changingH1

if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 is winner" ;
}else if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is winner";
}else {
    document.querySelector("h1").innerHTML = "Draw";
}
