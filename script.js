/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var player, round, nextPlayer, gamePlaying;



scores = [0,0];
roundScores = 0;
activePlayer = 0;
gamePlaying = true;

// set everything to zero in the intial state

document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('winer');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



document.querySelector('.btn-roll').addEventListener('click', function() {

if(gamePlaying) {

	//Random number

	var dice = Math.floor(Math.random() * 6) + 1;

	//Display result

	var Dom = document.querySelector('.dice');
	Dom.style.display = 'block';
	Dom.src = 'dice-' + dice + '.png';

	//update the round score

	if(dice !== 1) {

		// add the dice value to the round score of the active Player

		roundScores += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScores;
	}
	else {
		nextPlayer()
	}

};

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying) {

		//add the round score


	scores[activePlayer] += roundScores;

	//update the UI

	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	//check if there is a winner

	if(scores[activePlayer] >=100) {

		document.querySelector('#name-' + activePlayer).textContent = 'winner';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	}
	else {
		nextPlayer();
	}

	}
})


function nextPlayer() {

//next player
activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
roundScores = 0; 

// reinitialize the next player score to zero

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// set the next player active
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
}

})