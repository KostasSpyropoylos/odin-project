function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a > 0 && b > 0 ? a - b : b + a;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b > 0 ? a / b : "Error";
}


function clear(a,b,operator){
    output.textContent = 0;
    num1 = "";
    num2 = "";

}

function operate(a, b, operator) {
  if (operator == "/") {
    return divide(a, b);
  } else if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  }
}

let num1 = "";
let num2 = "";
let operator = "";
const output = document.querySelector(".output-container");
let btn = document.querySelector(".number-container");
let operator_pressed = false;
btn.addEventListener("click", function (e) {
  if (String(e.target.textContent) == "C") {
    clear(num1,num2,operator);
    operator_pressed=false;
    result_pressed=false;
    
  } else if (String(e.target.textContent) == "=" && num1 != "" && num2 != "") {
      output.textContent=operate(Number(num1), Number(num2), operator);
  } else {
    if (
      String(e.target.textContent) == "*" ||
      String(e.target.textContent) == "-" ||
      String(e.target.textContent) == "+" ||
      String(e.target.textContent) == "/"
    ) {
      operator = String(e.target.textContent);
      operator_pressed = true;
      output.textContent = "";
    }
    if (operator_pressed == false) {
      num1 += String(e.target.textContent);
      displayNum(num1);
    }
    if (
      operator_pressed == true &&
      String(e.target.textContent) != "*" &&
      String(e.target.textContent) != "-" &&
      String(e.target.textContent) != "+" &&
      String(e.target.textContent) != "/"
    ) {
      num2 += String(e.target.textContent);
      displayNum(num2);
    }
  }

  //console.log(btn.innerHTML);
});

function displayNum(num) {
    output.textContent=num;
}
