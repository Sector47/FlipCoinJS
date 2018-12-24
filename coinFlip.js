var coin0 = document.querySelector('.coin0');
var coin1 = document.querySelector('.coin1');
var x;
var y = 0;
var coinText0 = ["Heads", "Tails"];
var coinText1 = ["Heads", "Tails"];
function flipCoin(x){
	x.classList.toggle('is-flipped');
	if (y==1){
		y = 0;
	} 
	else{ 
		y = 1;	
	}
document.getElementById("demo3").innerHTML = coinText0[y];
}
function displayText(x){
	document.write(coinText0[x]);
}
document.getElementById("demo3").innerHTML = coinText0[y];


