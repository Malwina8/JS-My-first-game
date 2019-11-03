let playerScore = 0;
let compScore = 0;
let playerRound = 0;
let compRound = 0;
let roundNumber = 1;
let playerScore_h3 = document.getElementById('player-score');
let compScore_h3 = document.getElementById('comp-score');
let playerRound_h2 = document.getElementById('player-round');
let compRound_h2 = document.getElementById('comp-round');
let userMove = document.getElementById('user-move');
let pcMove = document.getElementById('comp-move');
let roundNumber_span = document.getElementById('round-number');

// PLAY GAME

function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId) {
    console.log('move:', argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
  }


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = getMoveName(randomNumber);
console.log(computerMove);
pcMove.innerHTML = computerMove;


console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
console.log(playerMove);
userMove.innerHTML = playerMove;

//RESULT

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
  if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
      ++playerScore;
      playerScore_h3.innerHTML = playerScore;
      if (playerScore == 3) {
        playerScore = 0;
        compScore = 0;
        ++playerRound;
        ++roundNumber;
        playerRound_h2.innerHTML = playerRound;
        messages.innerHTML = `Gracz wygrywa rundę!!`;
        roundNumber_span.innerHTML = roundNumber;
      }
    } else {
      printMessage('Komputer wygrywa!');
      ++compScore;
      compScore_h3.innerHTML = compScore;
      if (compScore == 3) {
        compScore = 0;
        playerScore = 0;
        ++compRound;
        ++roundNumber;
        compRound_h2.innerHTML = compRound;
        messages.innerHTML = `Komputer wygrywa rundę!!`;
        roundNumber_span.innerHTML = roundNumber;
        console.log('roundnumber ' + roundNumber);
      }
    }
    score(playerScore, compScore);
  }
    displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

// RESET

document.getElementById('reset').addEventListener('click', function(){
  playerScore_h3.innerHTML = 0;
  compScore_h3.innerHTML = 0;
  playerRound_h2.innerHTML = 0;
  compRound_h2.innerHTML = 0;
  userMove.innerHTML = '';
  pcMove.innerHTML = '';
  roundNumber_span.innerHTML = 1;
  resetAll(player,comp, round);
});
