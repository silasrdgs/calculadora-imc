function start() {
  var buttonCalculatorImc = document.querySelector('#button-calculator-imc');
  buttonCalculatorImc.addEventListener('click', handlerButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handlerButtonClick);
  inputHeight.addEventListener('input', handlerButtonClick);

  handlerButtonClick();
}
function calculateImc(weight, height) {
  return weight / (height * height);
}

function handlerButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcClass = document.querySelector('#imc-class');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imcCalculate = calculateImc(weight, height);
  var formattedImc = imcCalculate.toFixed(2).replace('.', ',');
 
  var imc = imcCalculate.toFixed(2);
  console.log(imc)

  
  imcResult.textContent = formattedImc;
  if (imc >= 16 && imc < 17) {
    imcClass.textContent = 'Muito abaixo do peso';
  } else if (imc >= 17 && imc < 18.5) {
    imcClass.textContent = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    imcClass.textContent = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    imcClass.textContent = 'Acima do peso';
  } else if (imc >= 30 && imc < 35) {
    imcClass.textContent = 'Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    imcClass.textContent = 'Obesidade grau II';
  } else if (imc >= 40) {
    imcClass.textContent = 'Obesidade grau III';
  } else {
    imcClass.textContent = 'Inválido';
  }
}

start();