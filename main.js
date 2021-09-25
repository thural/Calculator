//global variables
let currentOperatorContent = '',
    currentOperator = '';
let preOperand = [],
    postOperand = [];
let preDisplay = [];
let calculated = 0;
let equalIsOn = false;
//object to contain math functions
const operatorFunctions = {
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
    'modulus': function(a, b) {
        calculated = a % b
    }
};

// display areas
const dsp1 = document.querySelector('#current');
const dsp2 = document.querySelector('#temporal');

//updates content of the smaller display
function renderDsp1 (operatorSymbol) {
    if (!(dsp1.textContent == '')) preOperand = [];
    preDisplay = (dsp1.textContent + preOperand.join('') +
      operatorSymbol + postOperand.join('')).split('');
    if (preDisplay.length < 25) {
        dsp1.textContent = preDisplay.join('');
    } else {
        while (preDisplay.length > 24) {
            preDisplay.shift()
        };
        dsp1.textContent = preDisplay.join('');
    }
};
//updates content of the bigger display
function renderDsp2 (operatorSymbol) {
    if (!operatorSymbol) operatorSymbol = currentOperatorContent;
    preDisplay = (preOperand.join('') + operatorSymbol + postOperand.join('')).split('');
    if (preDisplay.length < 15) {
        dsp2.textContent = preDisplay.join('');
    } else {
        while (preDisplay.length > 14) {
            preDisplay.shift();
        };
        dsp2.textContent = preDisplay.join('')
    }
};

//function to calculate result after all elements are present
const calculate = function(operator) {
    if (postOperand[0] == undefined && !(preOperand[0] == undefined)) renderDsp2(operator.textContent);
    if (!(postOperand[0] == undefined) && !(preOperand[0] == undefined) &&
        !(currentOperator == '')) {
        operatorFunctions[currentOperator](Number(preOperand.join('')), Number(postOperand.join('')));
        renderDsp1(currentOperatorContent);
        preOperand = String(calculated).split('');
        postOperand = [];
        renderDsp2(operator.textContent);
        currentOperator = '';
    };
    if (!(preOperand[0] == undefined)) {
        currentOperator = operator.id;
        currentOperatorContent = operator.textContent
    };
    logg()
};
//function to insert selected number
const insert = function(number){
        if (!currentOperator) {
            if(preOperand.length<14) preOperand.push(number.textContent);
        } else {
            if(postOperand.length<14) postOperand.push(number.textContent)
        };
        renderDsp2();
        logg()
    };
//Object to cotain functions for special buttons
const functions = {
    'dot': function() {
        if (currentOperator && postOperand.indexOf('.') == (-1) && !(postOperand[0] == undefined)) {
            postOperand.push('.');
            renderDsp2()
        } else {
            if (preOperand.indexOf('.') == (-1) && !(preOperand[0] == undefined)) preOperand.push('.');
            renderDsp2()
        }
    },
    'backspace': function() {
        if (!(postOperand[0] == undefined)) postOperand.pop()
        else if (currentOperatorContent) currentOperator = '', currentOperatorContent = ''
        else preOperand.pop();
        renderDsp2();
        if (preOperand[0] == undefined) dsp2.textContent = '0';
        logg()
    },
    'equals': function() {
        if (!(currentOperator == '') && !(postOperand[0] == undefined)) {
            operatorFunctions[currentOperator](Number(preOperand.join('')),
                Number(postOperand.join('')));
            (postOperand[0] == undefined) ? renderDsp1(''): renderDsp1(currentOperatorContent);
            preDisplay = String(calculated).split('');
            if (preDisplay.length < 14) dsp2.textContent = '= ' + preDisplay.join('')
            else dsp2.textContent = '= ' + calculated.toExponential(6);
            preOperand = [];
            postOperand = [];
            currentOperatorContent = '';
            currentOperator = '';
            equalIsOn = true;
            logg();
        }
    },
    'clear': function() {
        dsp1.textContent = '';
        dsp2.textContent = '';
        postOperand = [];
        preOperand = [];
        calculated = 0;
        currentOperatorContent = '';
        currentOperator = '';
        renderDsp1('')
        logg()
    }
};
//clear display1 if any button is pressed after equals button clicked
const allBtns = document.querySelector('#buttons');
allBtns.addEventListener('mousedown', (event) => {
   if (!(event.target.id=='buttons')) event.target.classList.add('clicked');
  if (equalIsOn && !(event.target.id=='equals')) {
    dsp1.textContent = '', dsp2.textContent = '0',equalIsOn = false
  }
});
allBtns.addEventListener('mouseup', () => event.target.classList.remove('clicked'));

//listener for key events
document.addEventListener('keydown', (event) => {
    const selectedKey = allBtns.querySelector(`div[data-key='${event.key}']`);
    if (!selectedKey) return;
    if (equalIsOn&&!(selectedKey.id=='equals')) {
    dsp1.textContent = '', dsp2.textContent = '0',equalIsOn = false
    };
    if (selectedKey.className == 'operators') calculate(selectedKey)
    else if (selectedKey.className == 'numbers') insert(selectedKey)
    else if (selectedKey.className == 'specials') {
    functions[selectedKey.id]();    
    }
});
//click listeners for operator buttons node list
const oprBtns = Array.from(document.querySelectorAll('.operators'));
oprBtns.forEach((operator) => {
    operator.addEventListener('click', () => calculate(operator));
});
//click listeners for number buttons node list
const numBtns = Array.from(document.querySelectorAll('.numbers'));
numBtns.forEach((number) => {
    number.addEventListener('click', () => insert(number));
});
//click listener for clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => functions['clear']());
//click listener for dot button
const dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', () => functions['dot']());
//click listener for backspace button
const backspaceBtn = document.getElementById('backspace');
backspaceBtn.addEventListener('click', () => functions['backspace']());
//click listener for equals button
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', () => functions['equals']());

//event listeners to change social media icons on mouse events
const social = document.querySelector('social');
social.addEventListener('mouseover', ()=>{ 
    if (!event.target.id) {return};
selectedIcon = document.querySelector(`img[id = '${event.target.id}']`);
selectedIcon.src = `images/${event.target.id}_icon.png`;
});

social.addEventListener('mouseout', ()=>{ 
    if (!event.target.id) {return};
selectedIcon = document.querySelector(`img[id = '${event.target.id}']`);
selectedIcon.src = `images/black_${event.target.id}_icon.png`;
});
/////////////////For Logging////////////////
function logg() {
    console.log('/////////////////////////')
    console.log('preOperand:', preOperand);
    console.log('postOperand:', postOperand);
    console.log('calculated:', calculated)
};
logg()
////////////////////////////////////////////