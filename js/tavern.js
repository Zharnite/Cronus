//Canvas Retina
var canvas = document.getElementById('bartender-canvas');
var ctx = canvas.getContext('2d');

var image = new Image();
image.onload = function () {
	ctx.drawImage(image, 0, 0);
}
image.src = 'img/bunnyman.png';




//Tavern Block
var quote = document.getElementById('bartender-quote');


//Look

//Talk
var talkBtn = document.getElementById('bartender-talk-button');
var talkDialogueCount = 0;

talkBtn.addEventListener('click', nextTalkDialogue);

function nextTalkDialogue() {
	quote.innerHTML = "\"" + talkDialogueArray[talkDialogueCount] + "\"";
	talkDialogueCount++;
	talkDialogueCount = talkDialogueCount % talkDialogueArray.length;
}

var talkDialogueArray = ['Hello there.',
	 'Did you know puddles are floor mirrors?',
	 'I once rolled around in grass that smelled like the beach.',
	 'And then I saw a yellow sign about pesticide being sprayed this morning.',
	 'Hey, you\'re cute.',
	 'Would you like to get some carrot juice some time?',
	 'No? OK. I\'ll see you around.'];



//News
var newsBtn = document.getElementById('bartender-news-button');
var newsDialogueCount = 0;

newsBtn.addEventListener('click', nextNewsDialogue);
function nextNewsDialogue() {
	var oldNum = newsDialogueCount;
	while(oldNum == newsDialogueCount) {
		newsDialogueCount = getRandomInt(newsDialogueArray.length);
	}
	quote.innerHTML = "\"" + newsDialogueArray[newsDialogueCount] + "\"";
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

var newsDialogueArray = ['Another tavern opened up on the other side of town. I\'m worried about business.',
	'A shipment came in from overseas and I heard that the rats on board carried diseases that cause you to grow bunny ears.',
	'A necromancer arrived in town yesterday. Rumors are going around that she\'s looking for a soul.',
	'There are magicians wandering the town looking for their clan\'s lost spellbook.',
	'An alchemist moved in upstairs a week ago. He hasn\'t come out since.'];