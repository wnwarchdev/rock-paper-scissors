let randomNumber = Math.floor(Math.random() * 3 + 1); //losuje liczbę od 1 do 3

let computerMove = getMoveName(randomNumber);  //nadaje nazwę ruchu komputera wg klucza do zmiennej

console.log('Psst, komputer wylosował: ' + computerMove + '... Masz szansę zdecydować o wyniku!');  //wyswietla wynik w konsoli

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');  //pyta gracza o wybór zagrania

console.log('Gracz wpisał: ' + playerInput);  //wyswietla wynik w konsoli

let playerMove = getMoveName(playerInput); //nadaje nazwę ruchu gracza wg klucza do zmiennej

let resultAnnounce = displayResult (computerMove, playerMove) //uruchamia funkcję z uzyciem dwu zmiennych

printMessage (resultAnnounce)

console.log('wyświetlana wiadomość to: ' + resultAnnounce);  //wyswietla wynik w konsoli



//lub tak jezeli pominac konsolę: displayResult (computerMove, playerMove)
