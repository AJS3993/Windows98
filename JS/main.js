console.log('javascript file loaded')

/*----- constants -----*/



/*----- app's state (variables) -----*/

const score = 0;
const lvl = 1;
const dif = 1;

/*----- cached element references -----*/

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')

const inputBox1 = document.getElementById('input1')
const inputBox2 = document.getElementById('input2')
const inputBox3 = document.getElementById('input3')

/*----- event listeners -----*/

plusBtn.addEventListener('click', numSelect)
minusBtn.addEventListener('click', numSelect)
multiplyBtn.addEventListener('click', numSelect)
divideBtn.addEventListener('click', numSelect)

// inputBox1.addEventListener('dragend', replace1)

/*----- functions -----*/

// function numSelect(){
//     const box1Val = document.getElementById('input1')
//     box1Val = 
// }