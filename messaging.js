var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.ariaValueText;
    messages.appendChild(newMessage);

});