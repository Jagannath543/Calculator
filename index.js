let currentInput = '';

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperation(operator) {
  currentInput += ' ' + operator + ' ';
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (e) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}
