import React, { Component } from 'react';
import "./chat.css";
import "./script"
export default class Chat extends Component {
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