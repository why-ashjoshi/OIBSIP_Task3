const input = document.getElementById('input');
const output = document.getElementById('output');
const from = document.getElementById('from');
const to = document.getElementById('to');
const convertBtn = document.getElementById('convert');

function convertTemperature() {
  const inputValue = input.value;
  const inputUnit = from.value;
  const outputUnit = to.value;

  if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
    const result = (inputValue * 9/5) + 32;
    output.value = result.toFixed(2);
  } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
    const result = (inputValue - 32) * 5/9;
    output.value = result.toFixed(2);
  } else {
    output.value = inputValue;
  }
}

convertBtn.addEventListener('click', convertTemperature);
