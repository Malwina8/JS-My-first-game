function printMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function score(player, comp) {
  document.getElementById("player-score").textContent = player;
  document.getElementById("comp-score").textContent = comp;
}

function resetScore() {
  score(0, 0);
}

function playersRound(player, comp) {
  document.getElementById("player-round").textContent = player;
  document.getElementById("comp-round").textContent = comp;
}

function resetRound() {
	playersRound(0, 0);
}

function rounds(roundNumber) {
	document.getElementById('round-number').textContent = roundNumber;
}

function resetRounds() {
	rounds(0);
}

function resetAll(player, comp, round) {
	clearMessages();
	printMessage('Make your move!');
	resetScore();
	resetRound(player, comp);
	rounds(round);
}
