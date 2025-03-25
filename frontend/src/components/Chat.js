// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styles from './Chat.module.css'; // Import the CSS module

const socket = io('http://localhost:4000');  // Connect to the backend server

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Clean up the listener when the component is unmounted
        return () => {
            socket.off('chat message');
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('chat message', message); // Send message to the server
            setMessage('');
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>Chat</div>
            <div className={styles.chatMessages}>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className={styles.chatInput}
            />
            <button onClick={sendMessage} className={styles.chatButton}>
                Send
            </button>
        </div>
    );
};

export default Chat;
