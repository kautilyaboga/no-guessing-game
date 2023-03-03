'use strict';

// // 07 JavaScript in the Browser_ DOM and Events Fundamentals//

// // DOM Manipulation
// console.log(document.querySelector('.message')); 


// --------------------071 What's the DOM and DOM Manipulation---------------------

// --------------------072 Selecting and Manipulating Elements---------------------

// // Seeing rhe content
// console.log(document.querySelector('.message').textContent); 

// // setting the dom content  
// document.querySelector('.message').textContent = '🎉 Correct Number !';
// // Verifying it is changed via log, can see in the web browser too
// console.log(document.querySelector('.message').textContent); 


// console.log(document.querySelector('.number').textContent); 
// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess'));

// // class of the input, and for input we need to use the value attribute 
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// ---------------------------073 Handling Click Events------------------------

// document.querySelector(".check").addEventListener
// ('click', function () {
//     const guess = Number(document.querySelector(".guess").value); // taking the input with class gless and converting to number
//     console.log(guess, typeof guess); 

//     if(!guess){ // when there is no input we gotta give a message
//         document.querySelector(".message").textContent = '🚫 No Number';
//     }

// });

// --------------------------- 074 Implementing the Game Logic ------------------------

// define the secret number

let secretNumber = Math.trunc(Math.random()*20) + 1;

let  score = Number(document.querySelector(".score").textContent)
// store the score code in our script rather than replying solely on dom.
let highscore = 0 ;

console.log(secretNumber);

const disaplyMessage = function (message){document.querySelector(".message").textContent = message;
}




document.querySelector(".check").addEventListener
('click', function () {
    const guess = Number(document.querySelector(".guess").value); // taking the input with class guess and converting to number

 // when there is no input
    if(!guess){ // when there is no input we gotta give a message
        // document.querySelector(".message").textContent = '🚫 No Number';
        disaplyMessage('🚫 No Number');
    }

// when player wins
    else if (guess === secretNumber){
        document.querySelector(".message").textContent = '🎉 Correct Number !';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector(".number").textContent = secretNumber;

        if(score> highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
    }


    // ------------------------------------------- 078 Refactoring Our Code_ The DRY Principle ---------------------------------------

    // refactoring for eleminating dduplicate code
    // When guess is wrong we wanted to do
    
    else if (guess !== secretNumber){
        if (score > 1){
            // document.querySelector(".message").textContent = guess > secretNumber ? '📈 High' : '📉 Low';
            disaplyMessage(guess > secretNumber ? '📈 High' : '📉 Low');
            score--;
            document.querySelector(".score").textContent= score;
            }
            else {
                // document.querySelector(".message").textContent = 'You have no chances left';
                disaplyMessage('You have no chances left');
                document.querySelector(".score").textContent= 0;
            }
    }



    // else if (guess > secretNumber ) {
    //     if (score > 1){
    //     document.querySelector(".message").textContent = '📈 High';
    //     score--;
    //     document.querySelector(".score").textContent= score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = 'You have no chances left';
    //         document.querySelector(".score").textContent= 0;
    //     }
    // }
    // else if (guess < secretNumber) {
    //     if (score > 1){
    //     document.querySelector(".message").textContent = '📉 Low';
    //     score--;
    //     document.querySelector(".score").textContent= score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = ' ';
    //         document.querySelector(".score").textContent= 0;
    //     }
    // }


});

// ------------------------------------------- 075 Manipulating CSS Styles ---------------------------------------

//        document.querySelector(".number").style.width = '30rem';  // this is an inline styles
//        document.querySelector('body').style.backgroundColor = '#60b347';

// ------------------------------------------- 076 Coding Challenge ---------------------------------------


// Again Button
document.querySelector(".again").addEventListener
('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector(".number").style.width = '15rem';
    document.querySelector(".number").textContent = '?';
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score; 
}
)


//---------------------------------------------079 PROJECT #2_ Modal Window---------------------------------------------------------------





