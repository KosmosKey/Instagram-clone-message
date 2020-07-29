import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import FlipMove from "react-flip-move";

const Messages = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.user;
  return (
    <div ref={ref} className={`message__card ${isUser && "message_user"}`}>
      <Card
        className={`message__cardUser ${
          isUser ? "message_userCard" : "message_guestCard"
        }`}
      >
        <CardContent>
          <Typography className="Messages_Typography">
            <h1>
              {!isUser && `${message.user || "Unknown User"}:`}{" "}
              {message.messages}
            </h1>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
