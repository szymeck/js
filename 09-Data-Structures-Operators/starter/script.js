'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex,mainIndex){
return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function({starterIndex,mainIndex,time,adress}){
    console.log(`Order reveived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  },

  orderPasta: function(a,b,c){
    console.log(`here is your order of pasta witch ${a}, ${b}, ${c}`);
  },
  orderPizza: function(mainIngredient,...otherIngredients){
    
    console.log(mainIngredient);
    console.log(otherIngredients);
    
  }
  
};

const rest1 = {
  name: "Capri",
  numGuests:0,
}
const rest2 = {
  name: "La pizza",
  owner:'Szym',
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
rest1.numGuests ??=10;
rest2.numGuests ??=10;

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

const [a,b,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(a,b,otherFood);

const {sat,...weekDays}=restaurant.openingHours;
console.log(weekDays);

console.log(3 || 'jonas');
console.log(null || 3);
console.log(null || undefined|| 3);
console.log(null || 'jonas'|| 3);

restaurant.orderPizza('spinach','ham','tomat','olive');

console.log(3 && 'jonas' && null && 'lol');

if(restaurant.orderPizza){
  restaurant.orderPizza('spinach','ham')
};

restaurant.order && restaurant.order('spinach','ham');

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 23;
// console.log(guests2);

restaurant.numGuests=0;
const guests = restaurant.numGuests || 23;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

restaurant.orderPizza('ham','2xham','tomatsos','olive','kebab');




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
