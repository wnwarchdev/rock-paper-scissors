let computerMove = Math.floor(Math.random() * 3 + 1);


if(computerMove == 1){
  printMessage('Zagrałem kamień.');
} else if (computerMove == 2) {
	printMessage('Zagrałem papier.');
} else {
	printMessage('Zagrałem nożyce.');
} //w sumie to możnaby to napisac tak jak ponizej.... warunek nadaje wartosc zmeinnej, a wartosc drukowana jest tylko przez ostatnia linijke kodu...

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
} else if (playerInput == 2) {
	playerMove = 'papier';
} else if (playerInput == 3) {
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);
