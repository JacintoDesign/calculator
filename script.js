const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equal-btn');

// function updateDisplay() {

// }

function addDecimal() {
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function inputValue(value) {
  // console.log(value);
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent = displayValue === '0' ? value : displayValue + value;
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => inputValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => inputValue(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

function resetDisplay() {
  calculatorDisplay.textContent = '0';
}

function calculate() {

}

// Event Listeners
clearBtn.addEventListener('click', resetDisplay);
equalBtn.addEventListener('click', calculate);

resetDisplay();
