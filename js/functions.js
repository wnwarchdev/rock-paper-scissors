function printMessage(msg){ //dekalaracja
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function pointCount(player){ //dekalaracja - do przerobienia
	const count = (parseInt(document.getElementById(player).innerHTML))+1;
	document.getElementById(player).innerHTML = count;
}

function clearMessages(){ //dekalaracja
	document.getElementById('messages').innerHTML = '';
}

function addFade(id){ //dekalaracja
	"use strict";
	const element = document.getElementById(id);
	element.classList.remove("fadeIn");
	void element.offsetWidth; // bez tego jednak nie działa
	element.classList.add("fadeIn");
}

function getMoveName(argMoveId){ //dekalaracja
	if(argMoveId === 1){
		return 'kamień';
  }
	else if(argMoveId === 2) {
		return 'papier';
  }
	else if(argMoveId === 3) {
		return 'nożyce';
	}
}

function displayResult(argComputerMove, argPlayerMove){ //dekalaracja

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove); //informuje o wykonanych ruchach

	if (( argComputerMove === 'kamień' && argPlayerMove === 'papier') || ( argComputerMove === 'papier' && argPlayerMove === 'nożyce') || ( argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
		pointCount('counter-player');
		addFade('counter-player');
		return('Ty wygrywasz!');
  }
	else if (argComputerMove === argPlayerMove){ //warunek remisu
		addFade('counter-player');
		addFade('counter-computer');
		return('Remis!');
  }
	else {
		pointCount('counter-computer');
		addFade('counter-computer');
		return('Tym razem przegrywasz...'); //pozostałe warunki - przegrana
  }
}
