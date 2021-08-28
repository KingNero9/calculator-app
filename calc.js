
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p); //evaluates the string in js and executes it
    document.getElementById("result").value = q;
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}