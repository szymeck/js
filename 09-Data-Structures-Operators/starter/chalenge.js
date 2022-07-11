'use strict';
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players1: 
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    players2:[
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    play: function(gk,...fieldplayers){
    
        console.log(gk);
        console.log(fieldplayers);
    },
    
    };

    const [gk,...fieldplayers]=game.players1;
    console.log(gk);
    console.log(fieldplayers);

    const allPlayers = [...game.players1,...game.players2];
    console.log(allPlayers);

    const playersFinal1 = ['Thiago','Coutinio','Perisic',...game.players1];
    console.log(playersFinal1);

const team1 = game.odds.team1;
const team2 = game.odds.team2;
const draw = game.odds.x;
console.log(team1);
console.log(team2);
console.log(draw);

const printGoals = function(gol1,gol2,gol3,gol4) {
    
}