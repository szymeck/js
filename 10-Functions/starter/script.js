'use strict';








const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'lh',
    bookings: [],
    book(flightNum,name) { 
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
     this.bookings.push(`flight:${this.airline} ${this.iataCode}${flightNum}`)   
    },
}

lufthansa.book(239,'szymi sob');
lufthansa.book(635,'john sob');
console.log(lufthansa);

const book = lufthansa.book;

const eurowings ={
    airline:'eurowings',
    iataCode:'ew',
    bookings:[],
};
// not working
// book(444,'sob sob');

book.call(eurowings,23,'szym szym');

// const greet = function(greeting) {
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

const greet =(greeting) => { return (name) => console.log(`${greeting} ${name}`)};



const greetHey = greet (`hey`)
greetHey('szymi');
greetHey('sob');

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first,...others]= str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

// high order function
const transformer = function(str,fn) {
    console.log(`original string: ${str}`);
    console.log(`trans string: ${fn(str)}`);
    console.log(`trans by: ${fn.name}`);
    
}

transformer('java is the best!',upperFirstWord);

const high5 = function(){
    console.log(`xd`);
}
document.body.addEventListener('click',high5);
['jonas','szym',123].forEach(high5);



let flight= 'lh123';

const flight2 = {
    fc:'LH',
    fn: '123'
}
const szymi = {
    name:'Szymon Sob',
    passport: 2121232323
}


const checkIn = function(flightNum,passenger){

    // flightNum.fc='LM';
    // flightNum.fn='999';
    flightNum='LH345';
    passenger.name = 'MR.'+ passenger.name;
    if(passenger.passport === 2121232323){
        alert('check in')
    }
    else {
        alert('wrong passport')
    }
}

checkIn(flight,szymi);
console.log(flight2);
console.log(szymi);

const newPassport = function(person){
    person.passport=Math.trunc(Math.random()*100000000);
}
newPassport(szymi);
console.log(szymi);
checkIn(flight,szymi);























// const bookings =[];
// const createBooking = function(flightNum,numPassengers=1,price=199*numPassengers){

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);

