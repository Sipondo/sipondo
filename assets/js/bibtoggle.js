// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
function bibToggle(num) {
  var x = document.getElementById("bibblock_" + num);
  if (x.classList.contains("open")) {
    x.classList.remove("open");// = "bibtex hidden";
}else{
    x.classList.add("open");// = "bibtex hidden open";
  }
}
