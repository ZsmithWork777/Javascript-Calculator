// Get the screen element 
const display = document.getElementById('display');
//Get all the buttons
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false; // To check if the result is displayed

// Loop through all buttons 
buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        const value = button.textContent; // What's written on the button 
        const action = button.getAttribute('data-action'); // If it's AC or Del 


        // CLEAR
        if (action === 'clear') {
            currentInput = '';
            resultDisplayed = false; display.textContent = '0';return;    
            }

        // DELETE
        if (action === 'delete') {
            currentInput = currentInput.slice(0, -1); // Remove the last character 
            display.textContent = currentInput || '0';
            return;
        }

        // EQUALS
        if (button.id === 'equals') {
            try {
                currentInput = eval(currentInput).toString(); // Do THE MATH
                display.textContent = currentInput;
                resultDisplayed = true;
            } catch (error) {
                display.textContent = 'Error';
                currentInput = '';
            }
            return;
            }
        // Typing after equals starts a new calculation 
        if (resultDisplayed) {
            if (!isNaN(value)) {
                currentInput = value;
            }else {
                currentInput += value; // Append the value to the current input 
            }
            resultDisplayed = false;
        }else {
            currentInput += value;
        }
    display.textContent = currentInput;
    });
});