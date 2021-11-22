const TT = document.getElementById("number");

let num = 0;

function mais() {
    TT.innerText = ++num;
}
function tirar() {
    TT.innerText = --num;
}
function resetar() {
    TT.innerText = num = 0;
}