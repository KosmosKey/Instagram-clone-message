import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import "./styelsheet.scss";
import Navbar from "./Navbar";
import Messages from "./Messages";

const App = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const prop = prompt("Enter your username");
    setUsername(prop);
  }, []);

  const onSubmitMessage = () => {
    setMessages([...messages, { message: input, id: Math.random() + 1 }]);
    setInput("");
  };

  return (
    <Container>
      <Navbar />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onSubmitMessage}>Send messages</button>
      {messages.map(({ message, id }) => {
        return <Messages key={id} username={username} message={message} />;
      })}
    </Container>
  );
};

export default App;
