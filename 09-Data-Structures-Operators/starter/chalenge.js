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

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);
// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// console.log(gameEvents);
// const gameEventsObj = Object.fromEntries(gameEvents);
// console.log(gameEventsObj);
// const events = [...new Set(Object.values(gameEventsObj))];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);
// let game = 90;
// console.log(gameEvents.size);
// game /= gameEvents.size;
// console.log(game);
// console.log(`An event happened, on average, every ${game} minutes`);

// for (const [key, value] of gameEvents) {
//   const half = key < 45 ? 'First Half' : 'Secon dHalf';
//   console.log(`${half}${key}: ${value}`);
// }
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea');

const btn = document.querySelector('button');
const myScript = function () {
  const areaText = text.value.toLowerCase();
  const areaSplit = areaText.split('\n');
  console.log(areaSplit);
  areaSplit.indexOf('_');

  for (const [i,n] of areaSplit.entries()) {
    const [first,second] = n.trim().split('_');
    
    const outp = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
    console.log(`${outp.padEnd(20)}${'✔'.repeat(i+1)}`);
    

    

    // areaSplitWords.push(n.split('_'));
    // areaSplitWords.push(n.replace(n[1][0],n[1][0].toUpperCase()));
    // log
    
    
    // console.log(n.replace(n[n.indexOf('_')],n[n.indexOf('_') + 1].toUpperCase()));
  // let nSplit=n.split('_');
  // console.log(nSplit[1][0]);
  
  // let nSplitupper = nSplit.replace(nSplit[1][0],nSplit[1][0].toUpperCase());
  // console.log(nSplitupper);
  // console.log(nSplit.length);
  // console.log(nSplit.replace(nSplit[1][0],nSplit[1][0].toUpperCase()));
  
  // for ( nSplit of areaSplit){
  //   console.log(nSplit);
  //   let nSplitupper = nSplit.replace(nSplit[1][0],nSplit[1][0].toUpperCase());
  // console.log(nSplitupper);
  // }
  // console.log(upper.push(nSplit.replace(nSplit[1][0],nSplit[1][0].toUpperCase())));
    // console.log(n.split('_'));
    // console.log(n[1][1]);
    // console.log(n.length);  
    // console.log(n.replace(n.indexOf('_'), n.indexOf('_' + 1)));
    // console.log(n.replace(n.indexOf('_'), n.indexOf('_' + 1)).toUpperCase());
  }
  
};
btn.addEventListener('click', myScript);

// const textSplit = text.split(' ');
// console.log(textSplit);
