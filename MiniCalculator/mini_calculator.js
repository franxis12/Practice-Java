const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

const adition = document.getElementById("adition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

const equal = document.getElementById("equal");
const result = document.getElementById("result");
const punto = document.getElementById("punto");

const acBtn = document.getElementById("ac");

const historyUl = document.getElementById("history");

let firstNumberSelected = null;
let secondNumberSelected = null;
let operatorSelected= null;

let history = [];

one.addEventListener("click", () => pickNumber(1));
two.addEventListener("click", () => pickNumber(2));
three.addEventListener("click", () => pickNumber(3));
four.addEventListener("click", () => pickNumber(4));
five.addEventListener("click", () => pickNumber(5));
six.addEventListener("click", () => pickNumber(6));
seven.addEventListener("click", () => pickNumber(7));
eight.addEventListener("click", () => pickNumber(8));
nine.addEventListener("click", () => pickNumber(9));
zero.addEventListener("click", () => pickNumber(0));
punto.addEventListener("click", () => pickNumber("."));

adition.addEventListener("click", () => pickOperator("+"));
subtraction.addEventListener("click", () => pickOperator("-"));
multiplication.addEventListener("click", () => pickOperator("*"));
division.addEventListener("click", () => pickOperator("/"));
equal.addEventListener("click", () => pickOperator("="));

function loadHistory(){
    const historyUl = document.getElementById("history");
    historyUl.innerHTML = "";

    for(let i = 0; i < history.length; i++){
        
        if (history[i].includes("Invalid" || "operation" || "null")){
            history.splice(i);
            return;
        }
            
        const li = document.createElement("li")
        li.textContent = history[i];
        historyUl.appendChild(li)
    }
}

function pickNumber(number){
    if (number === "." && ((operatorSelected === null && firstNumberSelected.includes(".")) ||
                       (operatorSelected !== null && secondNumberSelected.includes(".")))) {
    return;
    }
    if(operatorSelected === null){
        if (firstNumberSelected !== null){
            firstNumberSelected += number.toString();
        } else {
            
            firstNumberSelected = number.toString();
        }
        console.log("First Number: " + firstNumberSelected)
    } else {
        if (secondNumberSelected !== null) {
        secondNumberSelected += number.toString();
        }else{
            secondNumberSelected = number.toString();
        }
        console.log("Second Number: "+ secondNumberSelected)
    }
    if (secondNumberSelected !== null){
        document.getElementById("result").innerHTML = secondNumberSelected;

    }else{
    document.getElementById("result").innerHTML = firstNumberSelected;
    }
}
function pickOperator(operator){
    if(firstNumberSelected === null){
        firstNumberSelected = "0";
        }

    if (operatorSelected === null){
        operatorSelected = operator;
    }
     document.getElementById("result").innerHTML = operatorSelected;
}
acBtn.addEventListener("click", function(){
    firstNumberSelected = null;
    secondNumberSelected = null;
    operatorSelected = null;
    document.getElementById("result").innerHTML = "0";

})

equal.addEventListener("click", () => {
    const num1 = parseFloat(firstNumberSelected);
    const num2 = parseFloat(secondNumberSelected);
    let finalResult = null;

    switch(operatorSelected) {
        case "+":
        finalResult = num1 + num2;
        break;
        case "-":
        finalResult = num1 - num2;
        break;
        case "*":
        finalResult = num1 * num2;
        break;
        case "/":
        finalResult = num2 !== 0 ? num1 / num2 : "Can not divide by 0";
        break;
        default:
        finalResult = "Invalid operation";
    }
    

    history.push(`${firstNumberSelected} ${operatorSelected} ${secondNumberSelected} = ${finalResult}`);
    document.getElementById("result").innerHTML = finalResult;
    
    firstNumberSelected = finalResult.toString();
    secondNumberSelected = null;
    operatorSelected = null;
    console.log(history)
    loadHistory();


})







