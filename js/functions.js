function printMessage(msg){ //dekalaracja
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	console.log(div);
}

function pointCount(player){ //dekalaracja
	let countCurrent = parseInt(document.getElementById(player).innerHTML);
	//console.log(countCurrent)
	let countNew = countCurrent + 1;
	//console.log(countNew);
	document.getElementById(player).innerHTML = countNew;
	//console.log("działa!");
}

function clearMessages(){ //dekalaracja
	document.getElementById('messages').innerHTML = '';
}

function addFade(id){ //dekalaracja
	"use strict";
		var element = document.getElementById(id);
		element.classList.remove("fadeIn");
		console.log("un-faded!");
		void element.offsetWidth;
	  element.classList.add("fadeIn");
		console.log("faded!");
}




function getMoveName(argMoveId){ //dekalaracja
  if(argMoveId == 1){
    return 'kamień';
  }
	else if(argMoveId == 2) {
  	 return 'papier';
  }
	else if(argMoveId == 3) {
		 return 'nożyce';
	}
	else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){ //dekalaracja

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove); //informuje o wykonanych ruchach

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier') { //trzy warunki wygranej, fajnie gdyby uzyc operatora OR i zapisac w jednej linii...
		pointCount('counter-player');
		addFade('counter-player');
		return('Ty wygrywasz!'); //zmieniłem na return z print zeby pokazac wynik w konsoli

  }
	else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		pointCount('counter-player');
		addFade('counter-player');
		return('Ty wygrywasz!');

  }
	else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		pointCount('counter-player');
		addFade('counter-player');
		return('Ty wygrywasz!');

	}
	else if (argComputerMove == argPlayerMove){ //warunek remisu
		addFade('counter-player');
		addFade('counter-computer');
		return('Remis!');

  }
	/*else if(argPlayerMove == 'nieznany ruch') { //w przypadku nieznanego ruchu
		return('Spróbuj grać wedle reguł');
	}*/
	else {
		pointCount('counter-computer');
		addFade('counter-computer');
    return('Tym razem przegrywasz...'); //pozostałe warunki - przegrana ; czy return konczy dzialanie funkcji? kiedy dalem point count za return to nie działalo...
  }
}
