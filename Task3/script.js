// let displayValue = '';

// function appendToDisplay(value) {
//     displayValue += value;
//     document.getElementById('display').value = displayValue;
// }

// function clearDisplay() {
//     displayValue = '';
//     document.getElementById('display').value = displayValue;
// }

// function backspace() {
//     displayValue = displayValue.slice(0, -1); // Remove the last character
//     document.getElementById('display').value = displayValue;
// }

// function calculate() {
//     try {
//         displayValue = eval(displayValue);
//         document.getElementById('display').value = displayValue;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }

let displayValue = '0'; 

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

window.addEventListener('load', function () {
    updateDisplay();
});

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = '';
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0'; 
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1); 
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
