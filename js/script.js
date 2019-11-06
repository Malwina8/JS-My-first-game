{ let playerScore = 0, compScore = 0, playerRound = 0, compRound = 0, roundNumber = 1;
// PLAY GAME

const playGame = function (playerInput){
  clearMessages();
  const getMoveName = function (argMoveId) {
    console.log('move:', argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log(computerMove);
    console.log('Gracz wpisał: ' + playerInput);
    console.log(playerMove);
    document.getElementById('comp-move').innerHTML = computerMove;
    document.getElementById('user-move').innerHTML = playerMove;

  }

const randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);


//RESULT

const displayResult = function (argComputerMove, argPlayerMove) {
    let playerScore_h2 = document.getElementById('player-score');
    let compScore_span = document.getElementById('comp-score');
    let playerRound_h3 = document.getElementById('player-round');
    let compRound_h3 = document.getElementById('comp-round');
    let roundNumber_span = document.getElementById('round-number');
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
      playerScore_h2.innerHTML = playerScore;
      if (playerScore == 3) {
        playerScore = 0;
        compScore = 0;
        ++playerRound;
        ++roundNumber;
        playerRound_h3.innerHTML = playerRound;
        messages.innerHTML = `Gracz wygrywa rundę!!`;
        roundNumber_span.innerHTML = roundNumber;
      }
    } else {
      printMessage('Komputer wygrywa!');
      ++compScore;
      compScore_span.innerHTML = compScore;
      if (compScore == 3) {
        compScore = 0;
        playerScore = 0;
        ++compRound;
        ++roundNumber;
        compRound_h3.innerHTML = compRound;
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
  playerScore = 0;
  compScore = 0;
  playerRound = 0;
  compRound = 0;
  roundNumber = 1;
  document.getElementById('user-move').innerHTML = '';
  document.getElementById('comp-move').innerHTML = '';
  resetAll(playerRound, compRound, roundNumber);
});
}
