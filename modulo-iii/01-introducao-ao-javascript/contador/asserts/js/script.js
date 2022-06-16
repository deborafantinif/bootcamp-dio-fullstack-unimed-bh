const currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

const decrement = () => {
  currentNumber--
  currentNumberWrapper.innerHTML = currentNumber;
}

const increment = () => {
  currentNumber++
  currentNumberWrapper.innerHTML = currentNumber;
}
