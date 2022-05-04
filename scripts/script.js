const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const actions = {'÷': '/', 'x': '*', '-': '-', '+': '+', '/': '/', '*': '*'};

function inputNmb(btn) {
    let currentValue = document.querySelector(".display").querySelector("input").value;
    
    if (document.querySelector("#operate-handler").value && actions[btn]) {
        currentValue = document.querySelector(".display").querySelector("input").value;
        document.querySelector("#operate-handler").value = "false";
        clearDisplay();
    }
    document.querySelector("#operate-handler").value = "false";
    if (actions[btn]) {
        verificationMathematicalOperations(currentValue, btn);
    }
    else {
    document.querySelector(".display").querySelector("input").value = `${currentValue}${numbers[btn]}`;
    }
    document.querySelector("input").focus();    
}

function operate() {
   let result = eval(document.querySelector(".display").querySelector("input").value);
   document.querySelector(".display").querySelector("input").value = result;
   document.querySelector("#operate-handler").value = "true";
}

function percentage() {
    let currentValue = document.querySelector(".display").querySelector("input").value;
    document.querySelector(".display").querySelector("input").value = currentValue + "*0.01";
    operate();
}
function changeValue(){
    let currentValue = document.querySelector(".display").querySelector("input").value;
    document.querySelector(".display").querySelector("input").value = -currentValue;
}
function clearDisplay() {
    document.querySelector(".display").querySelector("input").value = null;
}
function handleEnteredData(event) {
    event.value = event.value.replace(/[^\d^'.'^'*'^'+'^'\-'^'/']/g,'');
    if (actions[event.value.slice(-1)]) {
        verificationMathematicalOperations(event.value, event.value.slice(-1), true);
    }
}
function verificationMathematicalOperations(currentValue, btn, isKeyboard) {
    let lastSymbol = isKeyboard ? currentValue.slice(-2, -1) : currentValue.slice(-1);
    if (lastSymbol==="/"||lastSymbol==="*"||lastSymbol==="-"||lastSymbol==="+") {
        document.querySelector(".display").querySelector("input").value = isKeyboard ?
        currentValue.slice(0, currentValue.length-2) + actions[btn] : currentValue.slice(0, currentValue.length-1) + actions[btn];
    } else {
        document.querySelector(".display").querySelector("input").value = isKeyboard ?
        currentValue : `${currentValue}${actions[btn]}`;
    }
}