var myturn = false;
var chatboxshow = false;

//object
btnSend = document.getElementById("send");
inputMess = document.getElementById("chat_input");
chatMess = document.getElementById('chat_messages');
chatBox = document.getElementById("chatboxid");

//event
btnSend.onclick = function(){
    if (inputMess.value.trim() != ""){
        if (!myturn){
            var profile = document.createElement("div");
            profile.className = "profile my-profile";

            var icon = document.createElement("i");
            icon.className = "fa fa-user-circle";

            var span = document.createElement("span");
            span.appendChild(document.createTextNode("Me"));

            profile.appendChild(span);
            profile.appendChild(icon);

            chatMess.appendChild(profile);

            myturn = true;
        }

        var textMess = inputMess.value;

        var element = document.createElement("div");
        element.className = "message my-message";
        element.appendChild(document.createTextNode(textMess));
        chatMess.appendChild(element);

        inputMess.value = " "
        inputMess.value = null;

        document.getElementById('chat_box_body').scrollTop = document.getElementById('chat_box_body').scrollHeight;
    }
};

inputMess.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        btnSend.click();
     }  
});

document.getElementById("bubchat").onclick = function(){
    if (chatboxshow) { //hide the chat box
        chatBox.style.display = "none";
    } 
    else chatBox.style.display = "flex";// show the chat box

    chatboxshow = !chatboxshow;
}