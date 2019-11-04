console.log('javascript file loaded')

/*----- constants -----*/



/*----- app's state (variables) -----*/

const score = 0;
const lvl = 1;
const dif = 1;

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

/*----- event listeners -----*/

plusBtn.addEventListener('click', signSelect1)
minusBtn.addEventListener('click', signSelect1)
multiplyBtn.addEventListener('click', signSelect1)
divideBtn.addEventListener('click', signSelect1)

numBtn1.addEventListener('click', numSelect1)
numBtn2.addEventListener('click', numSelect1)
numBtn3.addEventListener('click', numSelect1)
numBtn4.addEventListener('click', numSelect1)

// inputBox1.addEventListener('dragend', replace1)

/*----- functions -----*/

function signSelect1(){
    sign = this.textContent;
   inputBox2.textContent = sign
}

function numSelect1(){
    num = this.textContent;
    if (inputBox1.textContent == ""){
    inputBox1.textContent = num
    }
else { inputBox3.textContent = num

}
}

result = inputBox1.textContent