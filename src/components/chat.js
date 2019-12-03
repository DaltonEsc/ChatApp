import React, { Component } from 'react';
import "./chat.css";
import "./script"
import io from "socket.io"
export default class Chat extends Component {
    constructor(){
        super();
        const socket = io('http://localhost:3000');
        const messageForm = document.getElementById("send-container");
        const messageInput = document.getElementById("message-input");
        const name = prompt('What is your name?');
    }
    appendMessage(message){
        const messageContainer = document.getElementById("message-container");
        const messageElement = document.createElement('div');
        messageElement.innerText=message;
        messageContainer.append(messageElement);
    }

    render() {
        return (
            <div>
            <script defer src="http://localhost:3000/socket.io/socket.io.js"></script>
                <div id="message-container"></div>
                <form id="send-container">
                    <input type="text" id="message-input"></input>
                    <button type="submit" id="send-button">Send</button>
                </form>
            </div>
        );
    }
    
}