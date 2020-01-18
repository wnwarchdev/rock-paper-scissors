{

function playGame(playerInput){

clearMessages()

const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));

console.log('Psst, komputer wylosował: ' + computerMove + '... Masz szansę zdecydować o wyniku!');

const playerMove = getMoveName(playerInput);

printMessage (displayResult (computerMove, playerMove))

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

}
