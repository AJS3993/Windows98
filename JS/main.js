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

const inputBox1 = document.querySelector('#input1');
const inputBox2 = document.querySelector('#input2');
const inputBox3 = document.querySelector('#input3');

/*----- event listeners -----*/

plusBtn.addEventListener('click', signSelect1)
minusBtn.addEventListener('click', signSelect1)
multiplyBtn.addEventListener('click', signSelect1)
divideBtn.addEventListener('click', signSelect1)

// inputBox1.addEventListener('dragend', replace1)

/*----- functions -----*/

function signSelect1(){
    sign = this.textContent;
   inputBox2.textContent = sign
}