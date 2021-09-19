//object to contain math functions
const operators = {
    'add': function(a, b) {
        calculated = a + b
    },
    'subtract': function(a, b) {
        calculated = a - b
    },
    'multiply': function(a, b) {
        calculated = a * b
    },
    'divide': function(a, b) {
        calculated = a / b
    },
    'sqrt': function(a, b) {
        if (a) calculated = Math.sqrt(a)
        else calculated = Math.sqrt(b)
    }
};
//global variables
let currentOperatorContent = '', currentOperator = '';
let preOperand = [], postOperand = [];
let calculated = 0;

// display areas
const dsp1 = document.querySelector('#current');
const dsp2 = document.querySelector('#temporal');

//operator button node list
const oprBtns = Array.from(document.querySelectorAll('.operators'));
//click event listeners for operator buttons
oprBtns.forEach((operator) => {
    operator.addEventListener('click', () => {

        if (!(postOperand[0]==undefined)&&!(preOperand[0]==undefined)&&
            !(currentOperator=='')) {
            operators[currentOperator](Number(preOperand.join('')),
                Number(postOperand.join('')));
            renderDsp1(currentOperatorContent);
            preOperand = String(calculated).split('');
            postOperand = []
            currentOperator = '';
        };
        if (!(preOperand[0]==undefined)) {
          currentOperator = operator.id;
          currentOperatorContent = operator.textContent
        };
        logg()
    });
});

//number button node list
const numBtns = Array.from(document.querySelectorAll('.numbers'));
//click event listeners for number buttons
numBtns.forEach((number) => {
    number.addEventListener('click', () => {
        if (!currentOperator) {
            preOperand.push(number.textContent);
        } else{
            postOperand.push(number.textContent)};
        logg()
    });
});
//click listener for clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    dsp1.textContent = '';
    dsp2.textContent = '0';
    postOperand = [];
    preOperand = [];
    calculated = 0;
    currentOperatorContent = '';
    currentOperator = '';
    renderDsp1('')
    logg()
});

//click listener for dot button
const dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', function() {
  if (currentOperator && postOperand.indexOf('.') == (-1) && !(postOperand[0]==undefined)) {
    postOperand.push('.')
  } else {
    if (preOperand.indexOf('.') == (-1)&&!(preOperand[0]==undefined)) preOperand.push('.')
    }
});
//click listener for delete button
const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', function() {
    if (!(postOperand[0]==undefined)) postOperand.pop()
    else preOperand.pop();
    logg()
});
//click listener for equals button
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', function() {
    if (currentOperator == '') {

    } else {
        operators[currentOperator](Number(preOperand.join('')),
            Number(postOperand.join('')));
        (postOperand[0]==undefined) ? renderDsp1('') : renderDsp1(currentOperatorContent);
        postOperand = [];
        preOperand = [];
        currentOperator = '';
        logg()
    }
})

//updates content of the smaller display
const renderDsp1 = function(operatorSymbol) {
  if (!(dsp1.textContent=='')) preOperand = [];
    let preDisplay = (dsp1.textContent + preOperand.join('') +
        operatorSymbol + postOperand.join('')).split('');
    if (preDisplay.length < 25) {
        dsp1.textContent = preDisplay.join('');
    } else {
        while (preDisplay.length > 24) {
            preDisplay.shift()
            console.log('preDisplay:', preDisplay)
        };
        dsp1.textContent = preDisplay.join('');
    }
};
/////////////////For Logging////////////////
function logg() {
    console.log('/////////////////////////')
    console.log('preOperand:', preOperand);
    console.log('postOperand:', postOperand);
    console.log('calculated:', calculated)
};
logg()
////////////////////////////////////////////