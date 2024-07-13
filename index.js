
const expression = document.getElementById('expression');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button[btn-name]');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnName = button.getAttribute('btn-name');
        if (btnName === 'c') {
            currentInput = '';
            result.textContent = '0'
        } else if (btnName == '=') {
            expression.textContent = currentInput
            try {

                currentInput = eval(currentInput).toString();
            } catch (e) {
                currentInput = 'wrong Expression';
            }
            result.textContent = currentInput;
        } else if (btnName === 'del') {
            currentInput = currentInput.slice(0, -1);
            expression.textContent = currentInput || '0';
        } else if (['+', '-', '*', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(btnName)) {
            currentInput = currentInput.concat(btnName)
            expression.textContent = currentInput;
        }
    });
});
