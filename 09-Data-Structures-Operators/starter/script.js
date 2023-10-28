'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

<<<<<<< HEAD
=======



  // console.log(flights.split('+'));
  for (const flight of flights.split('+')){
    const [f1,f2,f3,f4]=flight.replaceAll('_',' ').trim().split(';');
    const [f2s,f3s]=[f2.slice(0,3).toUpperCase(),f3.slice(0,3).toUpperCase()];
    const outp2 = `${f1.startsWith('Delayed') ? `X ${f1}` : `${f1}`} from ${f2s} to ${f3s} (${f4.replace(':','h')})`.padStart(45);
    console.log(outp2);
    

  }





>>>>>>> c83e8a411bfcfc76dcd8167d000a5a13d70f52ec
// Data needed for first part of the section
const weekD = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const [firstName, lastName] = 'szymon sobierajski'.split(' ');
console.log(lastName);

const fullName = ["Mr's", firstName, lastName].join(' ');
console.log(fullName);

const capit = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capit('ann mat lol xd ham lol');

const message = 'siema siema lul';
console.log(message.padStart(30, '1 '));
console.log('szymi'.padEnd(20, 'xd'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(16);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(872364287346));

const listPlanes = function (n) {
  console.log(`there are ${n} planes i line. ${'✈️'.repeat(n)}`);
};
listPlanes(12);

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline[0]);
console.log(plane[1]);
console.log(airline.length);
console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('air'));
console.log(airline.slice(airline.lastIndexOf('A'), airline.lastIndexOf('r')));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') - 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you are unlucky');
  } else {
    console.log('happy');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('11C');

const passenger = 'jonAs';
const passengerLowerCase = passenger.toLowerCase();
console.log(passengerLowerCase);
const passengerRight =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerRight);

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n ';
const trimmedEmail = loginEmail.toLowerCase().trim();
console.log(trimmedEmail);

const gbPrice = '277,90&';
const usPrice = gbPrice.replace('&', '$').replace(',', '.');
console.log(usPrice);
console.log(usPrice.replace('$','X'));


const annonc = 'All passengers to door 23. Boarding door 23.';
console.log(annonc.replaceAll('door', 'll'));

const plane2 = 'Airbus A320neo';
console.log(plane2.includes('Air'));
console.log(plane2.includes('boing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('part of airbuses');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('fuck off');
  } else {
    console.log('you can fly');
  }
};

checkBaggage('i have Knife, and sex');
checkBaggage('i have knife, and sex');
checkBaggage('i have Gun, and sex');
checkBaggage('i have sex');

// // const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     [weekD[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekD[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekD[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
//     console.log(
//       `Order reveived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
//     );
//   },

//   orderPasta: function (a, b, c) {
//     console.log(`here is your order of pasta witch ${a}, ${b}, ${c}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// // Maps iteration
// const question = new Map([
//   ['question', 'what is the best programming language?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'correct!'],
//   [false, 'try again'],
// ]);
// console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // Quiz map
// // console.log(question.get('question'));
// // for(const [key,value] of question){
// //   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // };
// // const answer = Number(prompt('your answer'));
// // console.log(answer);
// // console.log(question.get(answer === question.get('correct')|| answer===false ));

// // Convert map to array
// console.log(question);
// console.log(...question);
// const question2 = [...question];
// console.log(question2);

// // Maps
// const rest = new Map();
// rest
//   .set('categiories', ['italian', 'pizzeria', 'organic'])
//   .set('name', 'classico italiano')
//   .set(1, 'firenze')
//   .set(2, 'lisbon');
// console.log(rest);
// rest
//   .set(true, 'We are open')
//   .set(false, 'We are closed')
//   .set('open', 11)
//   .set('closed', 23);
// console.log(rest.get(1));
// console.log(rest.get(true));
// const restNam = 'classico italiano';
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
// console.log(rest.get(restNam === rest.get(2) && restNam !== rest.get(1)));
// console.log(rest.has('categiories'));

// Sets

// const orderSet = new Set(['piz','piz','past','past','risot']);
// console.log(orderSet);

// console.log(new Set('jonas'));

// console.log(orderSet.size);

// orderSet.add('garl');
// console.log(orderSet);

// for(const order of orderSet){
//   console.log(order);
// }

// const staff = ['weit','chef','weit','chef','menag'];
// const staffUnique = [...new Set(staff)];
// staffUnique.push('boss');
// console.log(staffUnique);
// console.log(staffUnique.length);
// console.log(new Set('szymek sobierajski').size);

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openS =`Restaurant is open for ${properties.length} days:`;
// for (const day of properties) {
// openS += `${day}`;

// }

// console.log(openS);

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const {open,close} of values){
//   console.log(`${open}  ${close}`);
// };

// for (const [day,{open,close}] of entries){

//   console.log(`Restaurant on ${day} is opened at ${open} and closed at ${close}`);
// }

// console.log(restaurant.openingHours.mon);
// if (restaurant.openingHours && restaurant.openingHours.thu) {
//   console.log(restaurant.openingHours.mon?.open);
// }
// console.log(restaurant.openingHours.thu?.open);
// // console.log(restaurant.openingHours.mon.open);

// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for ( const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`${day} restaurant is open at ${open}`);
// }

// for ( const day of days) {
//   const closed = restaurant.openingHours[day]?.close ?? 'no info';
//   console.log(`${day} restaurant is closed at ${closed}`);
// }

// console.log(restaurant.order?.(0,1) ?? 'method dont exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'method dont exist');

// const {name:newName}=restaurant;
// console.log(newName);
// const rest1 = {
//   name: "Capri",
//   numGuests:0,
// }
// const rest2 = {
//   name: "La pizza",
//   owner:'Szym',
// }

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||=10;
// // rest2.numGuests ||=10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner &&= `<anon>`;
// rest1.owner &&= `<anon>`;
// // rest2.owner = rest2.owner && `<anon>`;
// // rest1.owner = rest1.owner && `<anon>`;

// // rest1.owner ||='szym';

// console.log(rest1);
// console.log(rest2);

// console.log(rest1.name);

// // const arr = [1,2,...[3,4]];
// // console.log(arr);
// // const [a,...other]=arr;
// // console.log(a,other);

// const [a, b, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(a, b, otherFood);

// const { ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// console.log(3 || 'jonas');
// console.log(null || 3);
// console.log(null || undefined || 3);
// console.log(null || 'jonas' || 3);

// restaurant.orderPizza('spinach', 'ham', 'tomat', 'olive');

// console.log(3 && 'jonas' && null && 'lol');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('spinach', 'ham');
// }

// restaurant.order && restaurant.order('spinach', 'ham');

// // restaurant.numGuests = 0;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 23;
// // console.log(guests2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 23;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// restaurant.orderPizza('ham', '2xham', 'tomatsos', 'olive', 'kebab');

// const ingredients = [prompt(`Lets make pasta! Ingredient 1`),prompt(`Ingredient 2`),prompt(`Ingredient 3`)];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery ({
//   time:'22:30',
//   adress:'siedl 21',
//   mainIndex:2,
//   starterIndex:2,
// })

// const {name,openingHours,categories}= restaurant;
// console.log(name,openingHours,categories);

// const {name: restaurantName,openingHours:hours,categories:tags}=restaurant;
// console.log(restaurantName);

// const {mainMenu:menu=[],starterMenu:starters=[]}=restaurant;
// console.log(menu,starters);

// console.log(restaurant.order(2,0));
// let [starter,mainDish] = restaurant.order(2,0);
// console.log(starter,mainDish);
// [starter,mainDish]=[mainDish,starter];
// console.log(starter,mainDish);

// // const arr = [2,3,4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x,y,z] = arr;
// // console.log(x,y,z);

// // const [first,,,second]= restaurant.categories;
// // console.log(first,second);

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);
// const badNewArr2 = [1,2,arr];
// console.log(badNewArr2);
// const newArr = [1,2,...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const wholemenu = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(wholemenu);

// const nested = [2,4,[5,6]];
// const [i, ,j]=nested;
// console.log(i,j);

// const nested = [2,4,[5,6]];
// const[i,,[j,k]]=nested;
// console.log(i,j,k);

// const [p,q,r]=[8,9];

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// console.log(...menu.entries());
// for (const [i,el] of menu.entries()) console.log(`${i+1}:${el}`);
