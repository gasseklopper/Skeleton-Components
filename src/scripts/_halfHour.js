//var listItems = document.getElementsByClassName('halfhour__unorderedList').getElementsByClassName('halfhour__listItem');
var x = document.getElementsByClassName("halfhour__listItem");
console.log(x[2]);
x[2].innerHTML = "hello world";
console.log(x[2]);

var i;
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", activateItem);
}

function activateItem()  {
  alert("click detectet");
}
