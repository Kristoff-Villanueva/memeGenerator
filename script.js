// const memesData = require("./memesData.js");
import memesData from "./memesData.js";

const topTextInput = document.getElementById("topTextInput");
const bottomTextInput = document.getElementById("bottomTextInput");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const imgBtn = document.getElementById("imgBtn");
const memeDiv = document.getElementById("memeDiv");

topTextInput.addEventListener("keyup", function (event) {
	topText.textContent = event.target.value;
});

bottomTextInput.addEventListener("keyup", function (event) {
	bottomText.textContent = event.target.value;
});

imgBtn.addEventListener("click", function () {
	let totalMemes = memesData.data.memes.length + 1;
	let randomNum = Math.floor(Math.random() * totalMemes);
	memeDiv.style.background = `url("${memesData.data.memes[randomNum].url}")`;
	memeDiv.style.backgroundRepeat = "no-repeat";
	memeDiv.style.backgroundPosition = "center";
	memeDiv.style.backgroundSize = "contain";
});
