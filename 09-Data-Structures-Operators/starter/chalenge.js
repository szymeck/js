'use strict';
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: 
//     [[
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ]],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//     },
//     play: function(gk,...fieldplayers){
    
//         console.log(gk);
//         console.log(fieldplayers);
//     },
    
//     };

//     const [players1,players2]=game.players;
//     console.log(players1);
    
//     const [gk,...fieldplayers]=players1;
//     console.log(gk);
//     console.log(fieldplayers);

//     const allPlayers = [...players1,...players2];
//     console.log(allPlayers);

//     const players1Final = [...players1,'Szymi'];
//     console.log(players1Final);

//     const {team1,x:draw,team2}=game.odds;
//     console.log(team1,draw,team2);

//     const printGoals = function(...players){
//         console.log(`${players.length} goals where scored`);

//     }
//     printGoals('Lewandowski', 'Gnarby');
//     printGoals(...game.scored);

//     team1<team2 && console.log('Team 1 more likely to win');
//     team1>team2 && console.log('Team 2 more likely to win');
