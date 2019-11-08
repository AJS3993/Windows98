

/*----- constants -----*/



/*----- app's state (variables) -----*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20];

const signs = ['+', '-', '*', '/'];

var str = 0;

var lvl = 1;

const targetPicker = [];



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


function numPicker(){

    document.querySelector('#targNum').style.color = "black"
    document.querySelector('#result').style.color = 'black'

numBtn1.textContent = Math.floor(Math.random() * numbers.length);
numBtn2.textContent = Math.floor(Math.random() * numbers.length);
numBtn3.textContent = Math.floor(Math.random() * numbers.length);
numBtn4.textContent = Math.floor(Math.random() * numbers.length);

const targetPicker = []

targetPicker.push(numBtn1.textContent);
targetPicker.push(numBtn2.textContent);
targetPicker.push(numBtn3.textContent);
targetPicker.push(numBtn4.textContent);



ansNum1 = targetPicker[Math.floor(Math.random() * targetPicker.length)];
ansNum2 = targetPicker[Math.floor(Math.random() * targetPicker.length)];
multiplier = signs[Math.floor(Math.random() * signs.length)];
console.log(ansNum1 + multiplier + ansNum2)

trg = eval(ansNum1 + multiplier + ansNum2);

if (!Number.isInteger(trg)){
    numPicker()
}

trgBox.textContent = trg;
inputBox1.textContent = ""
inputBox2.textContent = ""
inputBox3.textContent = ""
result.textContent = ""
}


numPicker();


function signSelect1(){
    sign = this.textContent;
   inputBox2.textContent = sign
   readyToCalculate()
}

function numSelect1(){
    if (inputBox1.textContent == ""){
    num1 = this.textContent
    inputBox1.textContent = num1
} else { 
    num2 = this.textContent
    inputBox3.textContent = num2
    readyToCalculate()
}
}

function readyToCalculate(){
    if (inputBox1.textContent != ""){
        if (inputBox2.textContent != ""){
            if (inputBox3.textContent != ""){
                calculate()
                check()
            }
        }
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


function check(){
    if (calcNum == trg){
        lvl ++;
        lvlBox.textContent = lvl
        document.querySelector('#targNum').style.color = "green"
        document.querySelector('#result').style.color = 'green'
        setTimeout(numPicker,2000)
    }
    else{
        str ++;
        strBox.textContent = str
        document.querySelector('#targNum').style.color = 'red'
        document.querySelector('#result').style.color = 'red'
        document.querySelector('#strikeNum').style.color = 'red'
        loseCheck()
        setTimeout(numPicker,2000)
    }
}

function loseCheck(){
    if (str==3){
        location.reload();
    }
}


strBox.textContent = str
lvlBox.textContent = lvl
