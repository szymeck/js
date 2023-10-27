'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNeWAnswer(){
       return prompt(`What is your favorite prog language?
       0: JavaScript'
       1: Python
      2: Rust
      3: C++`,'Whats your number?')
    },
    };
const newAns=poll.registerNeWAnswer;

    document.querySelector('.poll').addEventListener('click',newAns());