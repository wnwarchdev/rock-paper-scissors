let computerMove = Math.floor(Math.random() * 3 + 1);


if(computerMove == 1){
  printMessage('Zagrałem kamień. Twój ruch!');
} else if (computerMove == 2) {
	printMessage('Zagrałem papier. Twój ruch!');
} else {
	printMessage('Zagrałem nożyce. Twój ruch!');
}
