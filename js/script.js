let computerMove = Math.floor(Math.random() * 3 + 1); //losuje liczbę od 1 do 3

console.log('Psst, komputer wylosował: ' + computerMove + '... Masz szansę zdecydować o wyniku!');  //wyswietla wynik w konsoli

if(computerMove == 1){ //wyswietla tekst w zaleznosci od wylosowanej liczby
  printMessage('Zagrałem kamień.');
} else if (computerMove == 2) {
	printMessage('Zagrałem papier.');
} else {
	printMessage('Zagrałem nożyce.');
} //w sumie to możnaby to napisac tak jak ponizej.... warunek nadaje wartosc zmeinnej, a wartosc drukowana jest tylko przez ostatnia linijke kodu...

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');  //pyta gracza o wybór zagrania

console.log('Gracz wpisał: ' + playerInput);  //wyswietla wynik w konsoli

let playerMove = 'nieznany ruch';  //nowa zmienna, o defaultowej wartosci

if(playerInput == 1){  //przypisuje opis ruchu wg wybrajen wartości; jezeli nie zostanie wybrana jakakolwiek ze wskazanych w komunikacie, to zmienna pozostanie niezmieniona
  playerMove = 'kamień';
} else if (playerInput == 2) {
	playerMove = 'papier';
} else if (playerInput == 3) {
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove); //wyswietla tekst z nazwą ruchu gracza

let gameResult = 'gra nierozstrzygnięta, spróbuj ponownie' //zmienna z defaultowa wartościa tekstowa, informująca o wyniku gry

if( computerMove == 1 && playerMove == 'papier'){ //trzy warunki wygranej gracza
  gameResult = 'Ty wygrywasz! Gratulacje!';
} else if (computerMove == 2 && playerMove == 'nożyce') {
	gameResult = 'Doskonała intuicja, brawo!';
} else if (computerMove == 3 && playerMove == 'kamień') {
  gameResult = 'Jesteś Kasparovem te gry...';
} else if (computerMove == 2 && playerMove == 'kamień') { //trzy warunki wygranej komputera
  gameResult = 'Przegrałeś, poćwicz samemu i spróbuj jeszcze raz jak będziesz gotowy';
} else if (computerMove == 3 && playerMove == 'papier') {
  gameResult = 'Potrafię czytać w myślach, nie masz szans!';
} else if (computerMove == 1 && playerMove == 'nożyce') {
  gameResult = 'Jeszcze trochę kodu i będę władać tą smętną planetą! Koduj dalej!';
} else if (computerMove == playerInput) { //chyba lepiej porównywać wartości liczbowe niż slowne... a najlepiej nie mieszac
  gameResult = 'Remis!';
}
console.log('wyświetlana wiadomość to: ' + gameResult);  //wyswietla wynik w konsoli

printMessage(gameResult); //wyswietla tekst z wynikiem
