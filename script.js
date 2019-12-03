const socket = io('http://localhost:3000');
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
var loc = 1;
const name = prompt('What is your name?');
appendMessage('You joined',loc);
socket.emit('new-user',name);

socket.on('chat-message', data => {
    appendMessage(data.name+": "+data.message,loc);
    loc+=1;
});
socket.on('user-connected', name => {
    appendMessage(name+" connected",loc);
    loc+=1;
});
socket.on('user-disconnected', name => {
    appendMessage(name+" disconnected",loc);
    loc+=1;
});


messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    appendMessage("You: "+message,loc);
    loc+=1;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
    scroll();
});
function appendMessage(message,data){
    const messageElement = document.createElement('div');
    messageElement.innerText=message;
    messageElement.id = data;
    messageContainer.append(messageElement);
    scroll();
}
function scroll(){
    document.getElementById(loc).scrollIntoView();
}