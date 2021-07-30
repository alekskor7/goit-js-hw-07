const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', checkValidation);

function checkValidation(event) {
    const target = event.currentTarget;
    const symbolQuantity = Number(target.dataset.length);
    // Проверка на строгое совпадение количества символов.
    if (symbolQuantity > 0 && target.value.length === symbolQuantity) {
        target.classList.remove('invalid');
        target.classList.add('valid');
    } else {
        target.classList.remove('valid');
        target.classList.add('invalid');
    }
}
