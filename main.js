////////////////////////////NO FRAMEWORK AND NO ENUM FUNCTION means LOTS of CODE ///////////////////////
//global variables
let oprContent = '', opr = '', num1 = [], num2 = [], preRender = [], calculated = 0, equalIsOn = false;
//object to contain math functions
const operatorFunctions = {
    'add': (a, b) => calculated = a + b,
    'subtract': (a, b) => calculated = a - b,
    'multiply': (a, b) => calculated = a * b,
    'divide': (a, b) => calculated = a / b,
    'modulus': (a, b) => calculated = a % b
};
// display areas
const disp1 = document.querySelector('#current');
const disp2 = document.querySelector('#temporal');

//function to update content of the smaller display
function render1(oprSymbol) {
    if (!(disp1.textContent == '')) num1 = [];
    preRender = (disp1.textContent + num1.join('') +
        oprSymbol + num2.join('')).split('');
    if (preRender.length < 25) {
        disp1.textContent = preRender.join('');
    } else {
        while (preRender.length > 24) {
            preRender.shift()
        };
        disp1.textContent = preRender.join('');
    }
};
//function to update content of the bigger display
function render2(oprSymbol) {
    if (!oprSymbol) oprSymbol = oprContent;
    preRender = (num1.join('') + oprSymbol + num2.join('')).split('');
    if (preRender.length < 14) {
        disp2.textContent = preRender.join('');
    } else {
        while (preRender.length > 13) {
            preRender.shift();
        };
        disp2.textContent = preRender.join('')
    }
};
//function to calculate result after all elements are present
const calculate = function(operator) {
    if (num2[0] == null && !(num1[0] == null)) render2(operator.textContent);
    if (!(num2[0] == null) && !(num1[0] == null) &&
        !(opr == '')) {
        operatorFunctions[opr](Number(num1.join('')), Number(num2.join('')));
        render1(oprContent);
        num1 = String(calculated).split(''), num2 = [];
        render2(operator.textContent), opr = '';
    };
    if (!(num1[0] == null)) opr = operator.id, oprContent = operator.textContent
};
//function to insert selected number
const insert = function(number) {
    if (!opr && num1.length < 14) num1.push(number.textContent);
        else if (num2.length < 14) num2.push(number.textContent);
    render2()
};
//Object to cotain functions for special buttons
const functions = {
    'dot': function() {
        if (opr && num2.indexOf('.') == (-1) && !(num2[0] == null)) {
            num2.push('.');
            render2()
        } else {
            if (num1.indexOf('.') == (-1) && !(num1[0] == null)) num1.push('.');
            render2()
        }
    },
    'backspace': function() {
        if (!(num2[0] == null)) num2.pop()
        else if (oprContent) opr = '', oprContent = ''
        else num1.pop();
        render2();
        if (num1[0] == null) disp2.textContent = '0'
    },
    'equals': function() {
        if (!(opr == '') && !(num2[0] == null)) {
            operatorFunctions[opr](Number(num1.join('')),
                Number(num2.join('')));
            (num2[0] == null) ? render1(''): render1(oprContent);
            preRender = String(calculated).split('');
            if (preRender.length < 14) disp2.textContent = '= '+preRender.join('')
            else disp2.textContent = '= ' + calculated.toExponential(6);
            num1 = [], num2 = [];
            oprContent = '', opr = '';
            equalIsOn = true
        }
    },
    'clear': function() {
        disp1.textContent = '', disp2.textContent = '';
        num1 = [], num2 = [];
        calculated = 0, oprContent = '';
        opr = '', render1('')
    }
};
//click event listener for all buttons
const allBtns = document.querySelector('#buttons');
allBtns.addEventListener('click', ()=>{
  if (event.target.className == 'numbers') insert(event.target)
    else if (event.target.className == 'operators') calculate(event.target)
      else if (event.target.className == 'specials') functions[`${event.target.id}`]()
});
//change button style on mouse click, also clear display if equal button is pressed
allBtns.addEventListener('mousedown', (event) => {
    if (!(event.target.id == 'buttons')) event.target.classList.add('clicked');
    if (equalIsOn && !(event.target.id == 'equals')) {
        disp1.textContent = '', disp2.textContent = '0', equalIsOn = false }});
allBtns.addEventListener('mouseup', () => event.target.classList.remove('clicked'));

//listener for keyboard events
document.addEventListener('keydown', (event) => {
    const selectedKey = allBtns.querySelector(`div[data-key='${event.key}']`);
    if (!selectedKey) return;
    if (equalIsOn && !(selectedKey.id == 'equals')) {
        disp1.textContent = '', disp2.textContent = '0', equalIsOn = false
    };
    if (selectedKey.className == 'operators') calculate(selectedKey)
    else if (selectedKey.className == 'numbers') insert(selectedKey)
    else if (selectedKey.className == 'specials') functions[selectedKey.id]()
});
//event listeners to change social media icons on mouse events
const social = document.querySelector('social');
social.addEventListener('mouseover', () => {
    if (!event.target.id) return;
    selectedIcon = document.querySelector(`img[id = '${event.target.id}']`);
    selectedIcon.src = `images/${event.target.id}_icon.png`;
});
social.addEventListener('mouseout', () => {
    if (!event.target.id) return;
    selectedIcon = document.querySelector(`img[id = '${event.target.id}']`);
    selectedIcon.src = `images/black_${event.target.id}_icon.png`;
});