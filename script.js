const playBtn = document.getElementById("btn");
let ball1 = document.getElementById("b1");
let ball2 = document.getElementById("b2");
let ball3 = document.getElementById("b3");
let ball4 = document.getElementById("b4");
let ball5 = document.getElementById("b5");
let grattis = document.getElementById("congrats");
let num1;
let num2;
let num3;
let num4;
let num5;
let ballArr = [];

let user = prompt('Vad heter du?');

const playFunc = () => {
    num1 = Math.floor(Math.random() * 5) +1;
    num2 = Math.floor(Math.random() * 5) +1;
    num3 = Math.floor(Math.random() * 5) +1;
    num4 = Math.floor(Math.random() * 5) +1;
    num5 = Math.floor(Math.random() * 5) +1;
    ball1.textContent = num1;
    ball2.textContent = num2;
    ball3.textContent = num3;
    ball4.textContent = num4;
    ball5.textContent = num5;
    ballArr.push(num1, num2, num3, num4, num5);
  grattis.textContent = fillFunc(ballArr);
   ballArr = [];
    }

playBtn.addEventListener('click', playFunc);


const fillFunc = (arr) => {

if (arr[0] === arr[1] || arr[0] === arr[2] || arr[0] === arr[3] || arr[0] === arr[4]) {
    return 'Du är en vinnare, ' + user;

} else {
    return 'Otur, ' + user + '! Försök igen';
}
} 


