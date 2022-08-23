let num1 = [], num2 = [], operator = undefined, previous = undefined;

const calculator = (input) => {

  const operators = {
    'add': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b,
    'modulus': (a, b) => a % b
  };

  const specials = {
    'dot': function () {
      const target = operator ? num2 : num1;
      if (target.includes('.')) return;
      target.push('.')
    },
    'backspace': function () {
      const target = num2.length ? num2 : operator ? operator : num1;
      if(target == operator) operator = undefined
      else target.pop()
    },
    'equals': function () {
      calculate(operator);
      operator = undefined
    },
    'clear': function () {
      num1 = [], num2 = [], operator = undefined;
    }
  };

  const insert = (num) => {
    const target = operator ? num2 : num1;
    target.push(num)
  };

  const operate = (input) => {
    specials[input]()
  };

  const calculate = (input) => {
    if (num2.length) {
      previous = {num1, operator, num2};
      const a = Number(num1.join(''));
      const b = Number(num2.join(''));
      const result = operators[operator](a, b);
      num1 = String(result).split('');
      num2 = [];
    } else previous = undefined;
    if (num1.length) operator = input
  }; 

  if (input in operators) calculate(input)
  else if (input in specials) operate(input)
  else insert(input);

  let output = {num1, operator, num2, previous};
  console.log(num1.join(''), operator, num2.join(''), 'previous: ', previous);
  return output
}

export default calculator