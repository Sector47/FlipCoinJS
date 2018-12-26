var coin0 = document.querySelector('.coin0');
var coin1 = document.querySelector('.coin1');
var x;
var y = 0;
var z;
var coinText0 = ["Heads", "Tails"];
var coinText1 = ["Heads", "Tails"];
var flipHistory = [];
var thumbs = 0;
var lastFlip;

//initiliaze front of coins
document.getElementById("coin0Front").innerHTML = coinText0[0];
document.getElementById("coin1Front").innerHTML = coinText1[0];
//initiliaze back of coins
document.getElementById("coin0Back").innerHTML = coinText0[1];
document.getElementById("coin1Back").innerHTML = coinText1[1];

//this function visually spins the coin as well as calling to update text of coin during the spin to hide the changing of text
//This function also calls for a randomly generated array of 1s, or 0s(heads or tails) to be created. This will be used by display text to update the front of coins.
function flipCoin(x){
	//start spinning coins
	coin0.classList.toggle("is-flipped");
	coin1.classList.toggle("is-flipped");
	setTimeout(function(){
		//reset coins so I only have to worry about front of coins
		coin0.classList.toggle("is-flipped");
		coin1.classList.toggle("is-flipped");
	},750);
	//call calcFlip() to calculate the output so that we can display the output in the next step
	calcFlip();
	
	//call displayText() to change text of coins during flip
	setTimeout(function(){
		displayText();
	},300);
}
function displayText(){
	console.log("flip history "+flipHistory);
	console.log("lastflip "+lastFlip);
	var heads =-1;
	var tails =-1;
	for(i=1;i<=Math.pow(2,thumbs);i++){
			if (flipHistory[flipHistory.length-i] == 1){
				heads=1;
			}
			if(flipHistory[flipHistory.length-i]==0){
				tails=1;
			}
		}
		if(heads==1 && tails==1){
			document.getElementById("coin0Front").innerHTML = coinText0[1];
			document.getElementById("coin1Front").innerHTML = coinText1[0];
			document.getElementById("coin0Back").innerHTML = coinText0[0];
			document.getElementById("coin1Back").innerHTML = coinText1[1];
		}
		else if(heads==1){
			document.getElementById("coin0Front").innerHTML = coinText0[0];
			document.getElementById("coin1Front").innerHTML = coinText1[0];
			document.getElementById("coin0Back").innerHTML = coinText0[1];
			document.getElementById("coin1Back").innerHTML = coinText1[1];
		}
		else if(tails==1){
			document.getElementById("coin0Front").innerHTML = coinText0[1];
			document.getElementById("coin1Front").innerHTML = coinText1[1];
			document.getElementById("coin0Back").innerHTML = coinText0[0];
			document.getElementById("coin1Back").innerHTML = coinText1[0];
		}
		else{
			document.getElementById("coin0Front").innerHTML = "Failure";
			document.getElementById("coin1Front").innerHTML = "Failure";
			document.getElementById("coin0Back").innerHTML = "Failure";
			document.getElementById("coin1Back").innerHTML = "Failure";
		}
}
//generate random flips(0,1) for 2^#ofthumbs and append them to history of all flips
function calcFlip(){
	var thisFlipHistory = [];
	for(i=0;i<Math.pow(2,thumbs);i++){
		thisFlipHistory[i] = Math.floor(Math.random()*Math.floor(2));
	}
	console.log("thumbs"+Math.pow(2,thumbs));
	lastFlip = thisFlipHistory.length;
	flipHistory = flipHistory.concat(thisFlipHistory);
	//REMOVE test flips in console

}

//these hides an element or show an element, I also use these functions to set the number of thumbs
function hideElement(z, t){
	z.classList.add("hideElement");
	thumbs = t;
}
function showElement(z, t){
	z.classList.remove("hideElement");
	thumbs = t;
}