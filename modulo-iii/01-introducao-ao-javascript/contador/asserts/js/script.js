const currentNumberWrapper = document.getElementById('currentNumber');
const buttonDecrement = document.getElementsByName('sub')[0];
const buttonIncrement = document.getElementsByName('sum')[0];
let currentNumber = 0;


const decrement = () => {
  if (currentNumber === -10) return buttonDecrement.disable = true
  currentNumber--
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) return currentNumberWrapper.style.color = 'red'
}

buttonDecrement.addEventListener('click', () => {
  decrement()
});

const increment = () => {
  if (currentNumber === 10) return buttonDecrement.disable = true
  currentNumber++
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber > 0) return currentNumberWrapper.style.color = 'black'
}

buttonIncrement.addEventListener('click', () => {
  increment()
});

