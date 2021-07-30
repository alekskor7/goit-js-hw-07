const btnRefs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
};

btnRefs.incrementBtn.addEventListener('click', () => {
  increment();
  updateCounter();
});

btnRefs.decrementBtn.addEventListener('click', () => {
  decrement();
  updateCounter();
});

let counterValue = Number(btnRefs.counter.textContent);

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

function updateCounter() {
  btnRefs.counter.textContent = counterValue;
}
