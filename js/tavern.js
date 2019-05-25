//Canvas Retina
var canvas = document.getElementById('bartender-canvas');
var ctx = canvas.getContext('2d');

var image = new Image();
image.onload = function () {
	ctx.drawImage(image, 0, 0);
}
image.src = 'img/bunnyman.png';


//Talk
var quote = document.getElementById('bartender-quote');
var talkBtn = document.getElementById('bartender-talk-button');
var dialogue = ['Hello there.',
	 'Did you know puddles are floor mirrors?',
	 'I once rolled around in grass that smelled like the beach.',
	 'And then I saw a yellow sign about pesticide being sprayed this morning.',
	 'Hey, you\'re cute.',
	 'Would you like to get some carrot juice some time?',
	 'No? OK. I\'ll see you around.'];
	 
var dialogueCount = 0;

talkBtn.addEventListener('click', nextDialogue);

function nextDialogue() {
	quote.innerHTML = "\"" + dialogue[dialogueCount] + "\"";
	dialogueCount++;
	dialogueCount = dialogueCount % dialogue.length;
}