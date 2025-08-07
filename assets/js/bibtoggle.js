// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
function bibToggle(num) {
  var x = document.getElementById("bibblock_" + num);
  if (x.classList.contains("open")) {
    x.classList.remove("open");// = "bibtex hidden";
}else{
    x.classList.add("open");// = "bibtex hidden open";
    var y = document.getElementById("abstractblock_" + num);
    if (y.classList.contains("open")) {
        y.classList.remove("open");// = "bibtex hidden";
    }

    // from: https://stackoverflow.com/questions/35297919/javascript-select-all-text-inside-a-pre-code-block-on-double-click
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(target);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(x);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  }
}

function abstractToggle(num) {
  var x = document.getElementById("abstractblock_" + num);
  if (x.classList.contains("open")) {
    x.classList.remove("open");// = "bibtex hidden";
}else{
    x.classList.add("open");// = "bibtex hidden open";
    var y = document.getElementById("bibblock_" + num);
    if (y.classList.contains("open")) {
        y.classList.remove("open");// = "bibtex hidden";
    }
  }
}


// from: https://stackoverflow.com/questions/35297919/javascript-select-all-text-inside-a-pre-code-block-on-double-click
window.onload = function(){

    document.body.addEventListener('dblclick', function(e){
       var target = e.target || e.srcElement;        
       if (target.className.indexOf("highlight") !== -1 || target.parentNode.className.indexOf("highlight") !== -1){
            var range, selection;

            if (document.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText(target);
                range.select();
            } else if (window.getSelection) {
                selection = window.getSelection();
                range = document.createRange();
                range.selectNodeContents(target);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            e.stopPropagation();
       }              

    });
};
