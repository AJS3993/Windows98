console.log('javascript file loaded')

/*----- constants -----*/



/*----- app's state (variables) -----*/

const score = 0;
const lvl = 1;
const dif = 1;

/*----- cached element references -----*/

var plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const inputBox1 = document.getElementById('#input1');
const inputBox2 = document.getElementById('#input2');
const inputBox3 = document.getElementById('#input3');

/*----- event listeners -----*/

plusBtn.addEventListener('click', numSelect1)
minusBtn.addEventListener('click', numSelect1)
multiplyBtn.addEventListener('click', numSelect1)
divideBtn.addEventListener('click', numSelect1)

// inputBox1.addEventListener('dragend', replace1)

/*----- functions -----*/

function numSelect1(){
    const val = this.textContent
    console.log(val)
}