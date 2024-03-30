const mainel = document.querySelector('.main');

const passwordel = document.createElement('input')
passwordel.classList.add('password');
passwordel.setAttribute('placeholder','Сгенерировать пароль');
passwordel.setAttribute('readonly', 'readonly');


const copbut = document.createElement('button');
copbut.classList.add('passwdbut');
copbut.innerText = 'Скопировать пароль';
copbut.addEventListener('click',(e)=>{
    passwordel.select();
    passwordel.setSelectionRange(0,99);
    navigator.clipboard.writeText(passwordel.value);
});



const genbtn = document.createElement('button');
genbtn.classList.add('passwdbut');
genbtn.innerText = 'Сгенерировать пароль';
genbtn.addEventListener('click',(e)=>{
let passwordd = generatePassword(6);
passwordel.value = passwordd
});


function generatePassword(passwordLength){
    const numberChars = "1234567890";
    const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
    const allChars = numberChars + upperChars + lowerChars;

    let randpass = "";
    for (let i = 0; i < passwordLength; i++){
        let randomChar = Math.floor(Math.random() * allChars.length);
        randpass += allChars[randomChar];
    }

    return randpass;
};







mainel.appendChild(passwordel);
mainel.appendChild(copbut);
mainel.appendChild(genbtn);