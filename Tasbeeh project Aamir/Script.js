let curValue = 0;


const counter = document.getElementById('counter');
const decreamentBtn = document.getElementById('decreamentBtn');
const increamentBtn = document.getElementById('increamentBtn');
const resetBtn = document.getElementById('resetBtn');

// increment button
increamentBtn.onclick = function() {
    curValue = curValue + 1;
    counter.textContent = curValue;
};



// Decrement button event handler
decreamentBtn.addEventListener('click', () => {
    curValue--;
    counter.textContent = curValue;
});

// Reset button event handler
resetBtn.addEventListener('click', () => {
    curValue = 0;
    counter.textContent = curValue;
});
