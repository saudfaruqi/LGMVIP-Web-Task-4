function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

function togglePositiveNegative() {
    const resultField = document.getElementById('result');
    if (resultField.value !== '') {
        if (resultField.value[0] === '-') {
            resultField.value = resultField.value.slice(1); // Remove the negative sign
        } else {
            resultField.value = '-' + resultField.value; // Add a negative sign
        }
    }
}
