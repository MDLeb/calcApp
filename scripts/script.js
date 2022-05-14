const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['/', '*', '-', '+', '/', '*', '.', '%'];


function inputNmb(btn){
    let currentValue = document.querySelector(".display").querySelector("input").value;
    document.querySelector(".display").querySelector("input").value = `${currentValue}${btn}`;
    document.querySelector("input").focus();    
}

function operate(event){
    if (event.code != 'Enter' && event.code != 'NumpadEnter' && event.type != 'click') return;
    let str = document.querySelector(".display").querySelector("input").value;
    if (str.includes('%')) str = str.replace('%', '*0.01');
    let result = eval(str);
    document.querySelector(".display").querySelector("input").value = result;
}

function changeValue(){
    let currentValue = document.querySelector(".display").querySelector("input").value;
    document.querySelector(".display").querySelector("input").value = -currentValue;
}

function clearDisplay(){
    document.querySelector(".display").querySelector("input").value = null;
}

function handleEnteredData(event){
    let val = event.target.value;
    if (val == '' && operations.includes(event.key)) event.target.value = '0';

    if (operations.includes(val[val.length - 1]) && operations.includes(event.key)) event.target.value = `${event.target.value.slice(0, (val.length - 1))}`;
    if (event.keyCode >= 65 && event.keyCode <= 90 || 
       [221, 219, 186, 222, 188, 190].includes(event.keyCode) || 
       (event.shiftKey && event.keyCode !== 53)) {
       event.preventDefault();
    }
    if (event.keyCode == 110) {
        let arr = val.split(/[-/*/+/]/);
        if (arr[arr.length-1].includes('.')) event.preventDefault();
    }
}