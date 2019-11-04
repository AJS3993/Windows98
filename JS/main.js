console.log('javascript file loaded')

/*----- constants -----*/



/*----- app's state (variables) -----*/

const str = 0;

const lvl = 1;

const dif = 1;

const trg = 5;

/*----- cached element references -----*/

const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const numBtn1 = document.querySelector('#num1');
const numBtn2 = document.querySelector('#num2');
const numBtn3 = document.querySelector('#num3');
const numBtn4 = document.querySelector('#num4');

const inputBox1 = document.querySelector('#input1');
const inputBox2 = document.querySelector('#input2');
const inputBox3 = document.querySelector('#input3');

const result = document.querySelector('#result');

const lvlBox = document.querySelector('#lvlNum');
const trgBox = document.querySelector('#targNum');
const strBox = document.querySelector('#strikeNum');

/*----- event listeners -----*/

plusBtn.addEventListener('click', signSelect1)
minusBtn.addEventListener('click', signSelect1)
multiplyBtn.addEventListener('click', signSelect1)
divideBtn.addEventListener('click', signSelect1)

numBtn1.addEventListener('click', numSelect1)
numBtn2.addEventListener('click', numSelect1)
numBtn3.addEventListener('click', numSelect1)
numBtn4.addEventListener('click', numSelect1)


/*----- functions -----*/

function signSelect1(){
    sign = this.textContent;
   inputBox2.textContent = sign
   calculate()
}

function numSelect1(){
    if (inputBox1.textContent == ""){
    num1 = this.textContent
    inputBox1.textContent = num1
} else { 
    num2 = this.textContent
    inputBox3.textContent = num2
    calculate()
}
}

function calculate(){
    if (sign == '+'){
    calcNum = parseInt(num1, 10) + parseInt(num2, 10)
    result.textContent = calcNum;
    }
    if (sign == '-'){
        calcNum = parseInt(num1, 10) - parseInt(num2, 10)
    result.textContent = calcNum;
    }
    if (sign == 'x'){
        calcNum = parseInt(num1, 10) * parseInt(num2, 10)
    result.textContent = calcNum;
}
if (sign == '÷'){
    calcNum = parseInt(num1, 10) / parseInt(num2, 10)
result.textContent = calcNum;
}
}

strBox.textContent = str;
lvlBox.textContent = lvl;
trgBox.textContent = trg;