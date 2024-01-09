
const juliaArr1 = [3, 5, 2, 12, 7];
const kateArr1 = [4, 1, 15, 8, 3];
const juliArr1Dogs = juliaArr1.slice(1,-2);
console.log(juliArr1Dogs);
const allDogs = [...kateArr1,...juliArr1Dogs];
console.log(allDogs);



const checkdogs = function(dogs){
dogs.forEach(function(dog,i){
if(dog>=3){
    console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
}
else if (dog<3){
    console.log(`Dog number ${i+1} is a puppy`);
}
});
};
checkdogs(allDogs);