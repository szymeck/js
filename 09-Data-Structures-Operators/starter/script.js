'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekD = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    [weekD[3]]: {
      open: 12,
      close: 22,
    },
    [weekD[4]]: {
      open: 11,
      close: 23,
    },
    [weekD[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order reveived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta: function (a, b, c) {
    console.log(`here is your order of pasta witch ${a}, ${b}, ${c}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// Maps iteration
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'try again'],
]);
console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Quiz map
// console.log(question.get('question'));
// for(const [key,value] of question){
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// };
// const answer = Number(prompt('your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')|| answer===false ));

// Convert map to array
console.log(question);
console.log(...question);
const question2 = [...question];
console.log(question2);

// Maps
const rest = new Map();
rest
  .set('categiories', ['italian', 'pizzeria', 'organic'])
  .set('name', 'classico italiano')
  .set(1, 'firenze')
  .set(2, 'lisbon');
console.log(rest);
rest
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('open', 11)
  .set('closed', 23);
console.log(rest.get(1));
console.log(rest.get(true));
const restNam = 'classico italiano';
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
console.log(rest.get(restNam === rest.get(2) && restNam !== rest.get(1)));
console.log(rest.has('categiories'));

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
// rest2.numGuests ||=10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner &&= `<anon>`;
rest1.owner &&= `<anon>`;
// rest2.owner = rest2.owner && `<anon>`;
// rest1.owner = rest1.owner && `<anon>`;

// rest1.owner ||='szym';

console.log(rest1);
console.log(rest2);

console.log(rest1.name);

// const arr = [1,2,...[3,4]];
// console.log(arr);
// const [a,...other]=arr;
// console.log(a,other);

const [a, b, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(a, b, otherFood);

const { ...weekDays } = restaurant.openingHours;
console.log(weekDays);

console.log(3 || 'jonas');
console.log(null || 3);
console.log(null || undefined || 3);
console.log(null || 'jonas' || 3);

restaurant.orderPizza('spinach', 'ham', 'tomat', 'olive');

console.log(3 && 'jonas' && null && 'lol');

if (restaurant.orderPizza) {
  restaurant.orderPizza('spinach', 'ham');
}

restaurant.order && restaurant.order('spinach', 'ham');

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 23;
// console.log(guests2);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 23;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

restaurant.orderPizza('ham', '2xham', 'tomatsos', 'olive', 'kebab');

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
