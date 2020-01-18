function playGame(playerInput){

clearMessages()

const randomNumber = Math.floor(Math.random() * 3 + 1); //losuje liczbę od 1 do 3

const computerMove = getMoveName(randomNumber);  //nadaje nazwę ruchu komputera wg klucza do zmiennej

console.log('Psst, komputer wylosował: ' + computerMove + '... Masz szansę zdecydować o wyniku!');  //wyswietla wynik w konsoli

const playerMove = getMoveName(playerInput); //nadaje nazwę ruchu gracza wg klucza do zmiennej

const resultAnnounce = displayResult (computerMove, playerMove) //uruchamia funkcję z uzyciem dwu zmiennych

printMessage (resultAnnounce)

}


document.getElementById('play-rock').addEventListener('click',function(){  //wciśnięcie guzika "1"
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click',function(){  //wciśnięcie guzika "2"
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click',function(){  //wciśnięcie guzika "3"
  playGame(3);
});
