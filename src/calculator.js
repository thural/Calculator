let num1 = [], num2 = [], operator = undefined, clear = true, previous = undefined;

const calculator = (input) => {
  previous = undefined;

  // functions for operators
  const operators = {
    'add': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b,
    'modulus': (a, b) => a % b
  };
  
  // functions for special key input
  const specials = {
    'dot': function () {
      const target = operator ? num2 : num1;
      if (target.includes('.')) return;
      target.push('.')
    },
    'backspace': function () {
      const target = num2.length ? num2 :
        operator ? operator :
          clear ? num1 : null;
      if (target == null) return;
      if (target == operator) operator = undefined
      else target.pop()
    },
    'equals': function () {
      calculate(operator);
      operator = undefined;
      clear = true
    },
    'clear': function () {
      num1 = [], num2 = [], operator = undefined;
      clear = true
    }
  };

  //insert number to target operand
  const insert = (num) => {
    const target = operator ? num2 : num1;
    target.push(num)
  };

  // perform special functions
  const operate = (input) => {
    specials[input]()
  };

  // perform calcualtion if all elements are present
  const calculate = (input) => {
    if (num2.length) {
      clear = false;
      previous = { num1, operator, num2 };
      const a = Number(num1.join(''));
      const b = Number(num2.join(''));
      const result = operators[operator](a, b);
      num1 = String(result).split('');
      num2 = []
    };
    if (num1.length) operator = input
  };

  //main logic
  if (input in operators) calculate(input)
  else if (input in specials) operate(input)
  else insert(input);

  //output result, current state and previous operation
  let output = { num1, operator, num2, clear, previous };
  //console.log(num1.join(''), operator, num2.join(''), 'clear: ', clear, 'previous: ', previous);
  return output
}

export default calculator