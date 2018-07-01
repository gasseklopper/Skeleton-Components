
var newItemCounter = 1;
var ourList = document.getElementsByClassName("halfhour__unorderedList");
var ourButton = document.getElementsByClassName("halfhour__btn");
var ourHeadline = document.getElementsByClassName("halfhour__headline");
console.log(ourHeadline[0].innerHTML);
var x = document.getElementsByClassName("halfhour__listItem");
console.log(x[2]);
x[2].innerHTML = "hello world";
console.log(x[2]);

var i;
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", activateItem);
}

function activateItem()  {
  ourHeadline[0].innerHTML = this.innerHTML;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("halfhour__active");
  }
  this.classList.add("halfhour__active");
  console.log(ourHeadline[0].innerHTML);
}

ourButton[0].addEventListener("click", createNewItem);

function createNewItem() {
  ourList[0].innerHTML += "<div class='halfhour__listItem'>something " + newItemCounter + "</div>";
  newItemCounter++;

}
