/*

James Black
VFW : 1305
Project 2

*/

var save = document.getElementById("button");
var textField= document.getElementById("chore");

var changeBorder = function() {
 textField.setAttribute("class", "hasFocus")    
}
var normalBorder = function() {
 textField.removeAttribute("class", "hasFocus")    
}

textField.addEventListener("focus",changeBorder);
textField.addEventListener("blur", normalBorder)


console.log(save);
console.log(textField);