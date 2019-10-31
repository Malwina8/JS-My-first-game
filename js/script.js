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

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  console.log(computerMove);

  printMessage('Ruch komputera: ' + computerMove);
   /*
  if (randomNumber == 1) {
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
   computerMove = "papier";
  } else if (randomNumber == 3) {
    computerMove  = "nożyce";
  } */

  /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);
  console.log(playerMove);
  /*
  if (playerInput == '1') {
    playerMove = 'kamień';
  } else if (playerInput == '2') {
    playerMove = 'papier';
  } else if (playerInput == '3') {
    playerMove = 'nożyce';
  } */

  printMessage('Twój ruch to: ' + playerMove);

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
    } else if (playerMove == 'nieznany ruch') {
      printMessage('Nieznany ruch, wybierz ponownie');
    } else {
      printMessage('Komputer wygrywa!');
    }
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
