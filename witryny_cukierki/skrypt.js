/* =============================================================
   Skrypt obsługujący formularz zamówienia (strona zamowienie.html)
   ============================================================= */

/* odczytuje wartość z pola edycyjnego o podanym identyfikatorze */
function pobierzWartosc(id) {
    var pole = document.getElementById(id);
    var wartosc = parseInt(pole.value, 10);
    if (isNaN(wartosc)) {
        wartosc = 0;
    }
    return wartosc;
}

/* zwraca tekst opisujący wybrany kolor */
function opiszKolor(r, g, b) {
    return 'RGB(' + r + ', ' + g + ', ' + b + ')';
}

/* ustawia kolor tła i czcionki akapitu z wynikiem */
function pokazKolor(r, g, b) {
    var paragraf = document.getElementById('twoje-zamowienie');
    var jasnosc = 0.299 * r + 0.587 * g + 0.114 * b;

    paragraf.textContent = 'Twoje zamówienie: kolor ' + opiszKolor(r, g, b);
    zastosujKolor(r, g, b);
}

/* ustawia tło i kolor czcionki akapitu, nie zmieniając jego treści */
function zastosujKolor(r, g, b) {
    var paragraf = document.getElementById('twoje-zamowienie');
    var jasnosc = 0.299 * r + 0.587 * g + 0.114 * b;

    paragraf.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    paragraf.style.color = (jasnosc > 140) ? '#000000' : '#ffffff';
}

/* składa całe zamówienie */
function zlozZamowienie() {
    var numer = pobierzWartosc('ksztalt');
    var r = pobierzWartosc('r');
    var g = pobierzWartosc('g');
    var b = pobierzWartosc('b');
    var paragraf = document.getElementById('twoje-zamowienie');

    paragraf.textContent = 'Twoje zamówienie: kształt nr ' + numer +
        ', kolor ' + opiszKolor(r, g, b);
    zastosujKolor(r, g, b);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('przycisk-zamowienie')
        .addEventListener('click', zlozZamowienie);

    document.getElementById('przycisk-kolor')
        .addEventListener('click', function () {
            pokazKolor(pobierzWartosc('r'), pobierzWartosc('g'), pobierzWartosc('b'));
        });
});
