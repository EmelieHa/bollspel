const playBtn = document.getElementById("btn");
let ball1 = document.getElementById("b1");
let ball2 = document.getElementById("b2");
let ball3 = document.getElementById("b3");
let ball4 = document.getElementById("b4");
let ball5 = document.getElementById("b5");
let grattis = document.getElementById("congrats");
let summa = document.getElementById("summa");
let num1;
let num2;
let num3;
let num4;
let num5;
let ballArr = [];

let user = prompt('Vad heter du?');

const playFunc = () => {
    num1 = Math.floor(Math.random() * 10) +1;
    num2 = Math.floor(Math.random() * 10) +1;
    num3 = Math.floor(Math.random() * 10) +1;
    num4 = Math.floor(Math.random() * 10) +1;
    num5 = Math.floor(Math.random() * 10) +1;
    ball1.textContent = num1;
    ball2.textContent = num2;
    ball3.textContent = num3;
    ball4.textContent = num4;
    ball5.textContent = num5;
    ballArr.push(num1, num2, num3, num4, num5);
  grattis.textContent = fillFunc(ballArr);
 
    }

playBtn.addEventListener('click', playFunc);


const fillFunc = (arr) => {
let resultArr = arr.reduce((accum, current) => accum+current, 0);
let sumArr =+ resultArr;
summa.textContent = 'Resultat = ' + sumArr;
while (sumArr < 100) {
    return 'Kör igen ' + user; 
} 
   return 'Du är en vinnare ' + user;

}




