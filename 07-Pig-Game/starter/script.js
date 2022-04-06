'use strict';

// select elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

let diceRoll = Math.trunc(Math.random()*6)+1;

const switchPlayer = function(){document.getElementById(`current--${activePlayer}`).textContent=0;
currentScore=0;
activePlayer= activePlayer===0 ? 1 :0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');

}


btnRoll.addEventListener('click', function(){

const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

if(dice!==1){
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else {
switchPlayer();
}

});


btnHold.addEventListener('click',function(){
scores[activePlayer]+=currentScore;
// scores[1]=scores[1]+currentScore;
document.getElementById(`current--${activePlayer}`).textContent=scores[activePlayer];
switchPlayer();
})