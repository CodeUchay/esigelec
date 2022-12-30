//Query Selector 
let display = document.getElementById("text");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eigit = document.getElementById("eight");
let nine = document.getElementById("nine");
let fullstop = document.getElementById("fullstop");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

//Event listener
plus.addEventListener ("click", plusFunction);
minus.addEventListener ("click", minusFunction);
multiply.addEventListener ("click", multiplyFunction);
divide.addEventListener ("click", divideFunction);
one.addEventListener ("click", oneFunction);
two.addEventListener ("click", twoFunction);
three.addEventListener ("click", threeFunction);
four.addEventListener ("click", fourFunction);
five.addEventListener ("click", fiveFunction);
six.addEventListener ("click", sixFunction);
seven.addEventListener ("click", sevenFunction);
eight.addEventListener ("click", eightFunction);
nine.addEventListener ("click", nineFunction);
zero.addEventListener ("click", zeroFunction);
fullstop.addEventListener ("click", fullstopFunction);
equal.addEventListener ("click", equalFunction);
clear.addEventListener  ("click", clearFunction);

//Functions
function plusFunction (event) {
    display.setAttribute("value", display.textContent += plus.innerText);
    console.log("loool");
};

function minusFunction (event) {
    display.setAttribute("value", display.textContent += minus.innerText);
};

function multiplyFunction (event) {
    display.setAttribute("value", display.textContent += multiply.innerText);
};

function divideFunction (event) {
    display.setAttribute("value", display.textContent += divide.innerText);
}
function zeroFunction (event) {
    display.setAttribute("value", display.textContent += zero.innerText);
}
function oneFunction (event) {
    display.setAttribute("value", display.textContent += one.innerText);
}
function twoFunction (event) {
    display.setAttribute("value", display.textContent += two.innerText);
}
function threeFunction (event) {
    display.setAttribute("value", display.textContent += three.innerText);
}
function fourFunction (event) {
    display.setAttribute("value", display.textContent += four.innerText);
}
function fiveFunction (event) {
    display.setAttribute("value", display.textContent += five.innerText);
}
function sixFunction (event) {
    display.setAttribute("value", display.textContent += six.innerText);
}
function sevenFunction (event) {
    display.setAttribute("value", display.textContent += seven.innerText);
}
function eightFunction (event) {
    display.setAttribute("value", display.textContent += eight.innerText);

}
function nineFunction (event) {
    display.setAttribute("value", display.textContent += nine.innerText);
}


function fullstopFunction (event) {
    display.setAttribute("value", display.textContent += fullstop.innerText);
}
function clearFunction (event) {
    display.value ="";
    console.log("clear");
}
function equalFunction (event) {
    
    display.value = eval(display.textContent);
    
    console.log("evaluated");
}