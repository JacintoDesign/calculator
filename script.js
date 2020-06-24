const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equal-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingSecondValue = false;

function sendInputValue(value) {
  if (awaitingSecondValue) {
    calculatorDisplay.textContent = value;
    awaitingSecondValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? value : displayValue + value;
  }
}

function addDecimal() {
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

  '=': (firstNumber, secondNumber) => secondNumber,
};

function useOperator(operator) {
  const currentValue = parseFloat(calculatorDisplay.textContent);
  if (!firstValue) {
    firstValue = currentValue;
  } else if (operatorValue) {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    console.log('calculation', calculation);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  }
  awaitingSecondValue = true;
  operatorValue = operator;
  console.log('firstValue', firstValue);
  console.log(operatorValue);

}



inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendInputValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

function resetDisplay() {
  firstValue = 0;
  calculatorDisplay.textContent = '0';
}

// Event Listeners
clearBtn.addEventListener('click', resetDisplay);
equalBtn.addEventListener('click', calculate);

resetDisplay();
