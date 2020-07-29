import React from "react";

function Messages({ message, username }) {
  return (
    <div>
      {username} : {message}
    </div>
  );
}

export default Messages;
