const inOutRefs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

inOutRefs.nameInput.addEventListener('input', event => {
  inOutRefs.nameOutput.textContent =
    event.target.value ? event.target.value : 'незнакомец';
});
