const inputRefs = {
  amountInput: document.querySelector('input[type="number"]'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

function createBoxes(amount) {
    let innerHTML = '';

    for (let i = 0; i < amount; i++) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        innerHTML += `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: rgb(${r}, ${g}, ${b})"></div>`;
    }
    
    inputRefs.boxesContainer.innerHTML = innerHTML;
}

function destroyBoxes() {
    inputRefs.boxesContainer.innerHTML = '';
}

inputRefs.renderBtn.addEventListener('click', () =>
    createBoxes(inputRefs.amountInput.value),
);

inputRefs.destroyBtn.addEventListener('click', destroyBoxes);