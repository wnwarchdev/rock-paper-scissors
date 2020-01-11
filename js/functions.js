function printMessage(msg){ //dekalaracja
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){ //dekalaracja
	document.getElementById('messages').innerHTML = '';
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
    return('Ty wygrywasz!'); //zmieniłem na return z print zeby pokazac wynik w konsoli
  }
	else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    return('Ty wygrywasz!');
  }
	else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		return('Ty wygrywasz!');
	}
	else if (argComputerMove == argPlayerMove){ //warunek remisu
    return('Remis...');
  }
	else if(argPlayerMove == 'nieznany ruch') { //w przypadku nieznanego ruchu
		return('Spróbuj grać wedle reguł');
	}
	else {
    return('Tym razem przegrywasz :('); //pozostałe warunki - przegrana
  }
}
