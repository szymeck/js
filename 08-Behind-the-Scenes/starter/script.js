'use strict';

function calcAge(birthYear){
    const age = 2022-birthYear;
   const printAge = function(){
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996){
        var milenial = true;
        const firstName = 'steven';
        const str = `oh, and you are a milenial, ${firstName}`;
        console.log(str);
        function add(a,b){
            return a+b;
        }
    }
    // console.log(str);
    console.log(milenial);
    // console.log(add(2,3));
   }
   printAge();
    return age;
}

const firstName = 'szymon'
calcAge(1987);
// console.log(age);



var me = 'jonas';
let job = 'teacher'
const year = 1991;
console.log(me);
console.log(job);

console.log(addDecl(2,3));



function addDecl(a,b){
    return a+b;
}
const addExpr = function(a,b){
    return a+b;
}
const addArrow = (a,b)=> a+b;
console.log(addExpr(2,3));
console.log(addArrow(2,3));