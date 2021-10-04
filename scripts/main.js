
// MAIN THREAD
window.addEventListener('DOMContentLoaded', _ => {

    var messages = document.getElementById("messages");
    var textbox = document.getElementById("textbox");
    var button = document.getElementById("button");
        
    button.addEventListener("click", function(){
        var newMessage = document.createElement("li");
        newMessage.innerHTML = textbox.value;
        messages.appendChild(newMessage);
        console.log(textbox.ariaValueText)
    
    });
    
    document.querySelector('#submit').addEventListener('click', click => {
        console.log(document.querySelector('#credential-email').value); 
        
        document.querySelector('.players').innerHTML = ''; 
        populateData(); 
    })
}); 