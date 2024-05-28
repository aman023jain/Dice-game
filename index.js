
// first we change 1st dice's pic

var randomNum1=Math.floor(Math.random() *6)+1;

var randomDiceImage="dice"+randomNum1+".png";

var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

// now we change 2nd dice's pic

var randomNum2=Math.floor(Math.random() *6)+1;
var randomImageSource2="images/"+"dice"+randomNum2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 Wins !!!";

}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 Wins !!!";

}
else{
    document.querySelector("h1").innerHTML="Draw !!!";

}