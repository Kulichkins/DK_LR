

const maingameel = document.querySelector('.main-game');
let attempts = 5;


const gameel = document.createElement('input')
gameel.classList.add('gameel');
gameel.setAttribute('placeholder','Введи число');


const firstIn = document.createElement('input')
firstIn.classList.add('firstIn');
firstIn.setAttribute('placeholder','Введи точку отсчета');


const firstOut = document.createElement('input')
firstOut.classList.add('firstOut');
firstOut.setAttribute('placeholder','Введи точку конца');


const takeBut = document.createElement('button');
takeBut.classList.add('passwdbut')
takeBut.innerText = 'Загадывай машина';
takeBut.addEventListener('click', (e) => {
    let chisla = gennum();
    gameel.setAttribute('data-random-number', chisla);
});
  
function gennum() {
    if (typeof parseInt(firstIn.value) !== 'number' || isNaN(firstIn.value)){
        alert('Данные введены некоректно попробуй снова')
        return(NaN)
    }
    else{
        const min = parseInt(firstIn.value);
        const max = parseInt(firstOut.value);
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return(randomNumber)
    }
    
}


const checkBut = document.createElement('button');
checkBut.classList.add('passwdbut')
checkBut.innerText = 'Проверяем';
checkBut.addEventListener('click', (e) => {
    const guessedNumber = parseInt(gameel.value);
    let randomNumber = parseInt(gameel.getAttribute('data-random-number'));
    if (attempts > 0 && randomNumber != NaN) {
        const guessedNumber = parseInt(gameel.value);
        if (guessedNumber === randomNumber) {
          alert('Вы угадали число!');
          attempts = 5;
        } else if (guessedNumber < randomNumber) {
          alert('Введенное число меньше загаданного.');
        } else {
          alert('Введенное число больше загаданного.');
        }
        attempts--;
        gameel.setAttribute('data-attempts', attempts);
      } 
      else {
        alert('У вас закончились попытки. Загаданное число было: ' + randomNumber);
        attempts = 5;
        randomNumber = gennum();
      }
});



maingameel.appendChild(firstIn);
maingameel.appendChild(firstOut);
maingameel.appendChild(takeBut);
maingameel.appendChild(gameel);
maingameel.appendChild(checkBut);
