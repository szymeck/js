'use strict';

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

// checkIn(flight,szymi);
// console.log(flight2);
// console.log(szymi);

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

