function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

//drop profile
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')){
openDropdown.classList.remove('show');
}
}
}
}

function myFunctionCat() {
document.getElementById("myDropcatdown").classList.toggle("showcat");
}
//drop categories
window.onclick = function(event) {
if (!event.target.matches('.dropcat')) {

var dropdowns = document.getElementsByClassName("dropcatdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('showcat')) {
openDropdown.classList.remove('showcat');
}
}
}
}