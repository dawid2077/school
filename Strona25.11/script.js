function Policz() {
    const input = document.getElementById('input1');
    const wynik = document.getElementById('wynik');
    wynik.textContent = input.value.length;
}
function Numer_znaku() {
    const input = document.getElementById('input1');
    const wynik = document.getElementById('wynik');
    wynik.textContent = input.value.charCodeAt(0);
}
function Konkatenacja() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const wynik = document.getElementById('wynik');
    wynik.textContent = input1.value+input2.value;
}