// Default Code
document.getElementsByName('uppercase-switch')[0].checked = 'true'
document.getElementsByName('numbers-switch')[0].checked = 'true'


// Length Slider Script
var lengthValue = document.getElementsByClassName('length-value')[0];
var lengthInput = document.getElementById('length');
var generateButton = document.getElementsByClassName('generate-btn')[0];
var passwordDisplay = document.getElementsByClassName('password-display')[0];

lengthInput.oninput = function() {
  lengthValue.textContent = lengthInput.value;
}


// Password Generator Script
var defaultChars = 'abcdefghijklmnopqrstuvwsyxz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWSYXZ';
var numberChars = '1234567890';
var symbolChars = '~!@#$%^&*()_+><?|';

generateButton.addEventListener('click', function() {  
  let allChars = defaultChars + uppercaseChars + numberChars + symbolChars;
  let password = '';

  const uppercaseOn = document.getElementsByName('uppercase-switch')[0];
  const numbersOn = document.getElementsByName('numbers-switch')[0];
  const symbolsOn = document.getElementsByName('symbols-switch')[0];

  if (uppercaseOn.checked == false) {
    allChars = allChars.replace(new RegExp(`[${uppercaseChars}]`, 'g'), '');
  };

  if (numbersOn.checked == false) {
    allChars = allChars.replace(new RegExp(`[${numberChars}]`, 'g'), '');
  }

  if (symbolsOn.checked == false) {
    allChars = allChars.replace(new RegExp(`[${symbolChars}]`, 'g'), '');
  }

  while (lengthInput.value > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }

  passwordDisplay.textContent = password;
})