function oblicz() {
  var wynik = document.getElementById("wynik");
  var wZielonejGorze = document.getElementById("zyg").checked;
  var kilometry = Number(document.getElementById("km").value);

  if (wZielonejGorze) {
    wynik.innerHTML = "Dowieziemy Twoją pizzę za darmo";
  } else {
    wynik.innerHTML = "Dowóz będzie Cię kosztował " + kilometry * 2 + " złotych";
  }
}
