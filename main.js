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
let currentOperatorContent = '',
    currentOperator = '';
let preOperand = [],
    postOperand = [];
let preDisplay = [];
let calculated = 0;
// display areas
const dsp1 = document.querySelector('#current');
const dsp2 = document.querySelector('#temporal');

//operator button node list
const oprBtns = Array.from(document.querySelectorAll('.operators'));
//click event listeners for operator buttons
oprBtns.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (postOperand[0] == undefined) renderDsp2(operator.textContent)
        else renderDsp2(currentOperatorContent);
        if (!(postOperand[0] == undefined) && !(preOperand[0] == undefined) &&
            !(currentOperator == '')) {
            operators[currentOperator](Number(preOperand.join('')),
                Number(postOperand.join('')));
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
    });
});
//number button node list
const numBtns = Array.from(document.querySelectorAll('.numbers'));
//click event listeners for number buttons
numBtns.forEach((number) => {
    number.addEventListener('click', () => {
        if (!currentOperator) {
            preOperand.push(number.textContent);
        } else {
            postOperand.push(number.textContent)
        };
        renderDsp2();
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
    if (currentOperator && postOperand.indexOf('.') == (-1) && !(postOperand[0] == undefined)) {
        postOperand.push('.');
        renderDsp2()
    } else {
        if (preOperand.indexOf('.') == (-1) && !(preOperand[0] == undefined)) {
            preOperand.push('.')
        };
        renderDsp2()
    }
});
//click listener for delete button
const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', function() {
    if (!(postOperand[0] == undefined)) postOperand.pop()
    else if (currentOperatorContent) {
        currentOperator = '', currentOperatorContent = ''
    } else {
        preOperand.pop()
    };
    renderDsp2();
    logg()
});
//click listener for equals button
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', function() {
        if (currentOperator == '') {

        } else {
            operators[currentOperator](Number(preOperand.join('')),
                Number(postOperand.join('')));
            (postOperand[0] == undefined) ? renderDsp1(''): renderDsp1(currentOperatorContent);
            preDisplay = String(calculated).split('');
            if (preDisplay.length < 14) {
                dsp2.textContent = '= ' + preDisplay.join('');
            } else {
                while (preDisplay.length > 12) {
                    preDisplay.pop()
                };
                dsp2.textContent = '= ' + preDisplay.join('')
            };
            preOperand = [];
            postOperand = [];
            currentOperatorContent = '';
            currentOperator = '';
            logg();
            //added to clear display1 before a new operation, to temporally fix a bug, will be removed later
            dsp1.textContent = ''
        }
    })
    //updates content of the smaller display
const renderDsp1 = function(operatorSymbol) {
    //if (preOperand[0]==undefined) dsp1.textContent='';
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
const renderDsp2 = function(operatorSymbol) {
    if (operatorSymbol) {
        preDisplay = (preOperand.join('') + operatorSymbol + postOperand.join('')).split('');
    } else {
        preDisplay = (preOperand.join('') + currentOperatorContent + postOperand.join('')).split('');
    };
    if (preDisplay.length < 14) {
            dsp2.textContent = preDisplay.join('');
        } else {
            while (preDisplay.length > 12) {
                preDisplay.shift();
            };
            dsp2.textContent = preDisplay.join('')
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