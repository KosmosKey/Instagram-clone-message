import React, { useState, useEffect } from "react";
import { Container, FormControl, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./styelsheet.scss";
import Navbar from "./Navbar";
import Messages from "./Messages";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import { ModalOpen } from "./ModalOpen";

const App = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [inputModal, setInputModal] = useState("");
  const [show, setShow] = useState(false);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setShow(true);
  }, []);

  const onSubmitMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      messages: input,
      user: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const submitNameForm = () => {
    setUsername(inputModal);
    setShow(false);
  };

  return (
    <div>
        {show ? (
          <ModalOpen
            inputValue={inputModal}
            onchangeInput={(e) => setInputModal(e.target.value)}
            submitForm={submitNameForm}
          />
        ) : (
          ""
        )}

      <Container>
        <Navbar username={username} />

        <form onSubmit={onSubmitMessage}>
          <FormControl className="App__FormSubmit">
            <input
              type="text"
              value={input}
              className="App__InputField"
              placeholder="Message..."
              onChange={(e) => setInput(e.target.value)}
            />

            <IconButton
              className="Message__IconButton"
              type="submit"
              disabled={!input}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
        <FlipMove>
          {messages.map(({ message, id }) => {
            return <Messages key={id} username={username} message={message} />;
          })}
        </FlipMove>
      </Container>
    </div>
  );
};

export default App;
