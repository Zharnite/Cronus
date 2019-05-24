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
	 'It is... lovely weather we are having.',
	 'HAA!',
	 'I hope the weather stays this mild...',
	 'If the weather continues...',
	 'We are in for a luvely surprise.',
	 'The area is secure.'];
var dialogueCount = 0;

talkBtn.addEventListener('click', nextDialogue);

function nextDialogue() {
	quote.innerHTML = "\"" + dialogue[dialogueCount] + "\"";
	dialogueCount++;
	dialogueCount = dialogueCount % dialogue.length;
}