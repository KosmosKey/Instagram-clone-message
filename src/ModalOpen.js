import React from "react";
import { Button } from "@material-ui/core";

export const ModalOpen = ({ submitForm, inputValue, onchangeInput }) => {
  return (
    <div className="ModalOpen__modal">
      <div className="modal__modal">
        <img
          src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=100"
          alt="instagram"
        />
        <div className="modalHeader">
          <h1>ENTER YOUR NAME TO START!</h1>
          <input
            type="text"
            placeholder="Enter your name..."
            value={inputValue}
            onChange={onchangeInput}
          />
          <Button
            className="Modal__Button"
            variant="contained"
            color="secondary"
            onClick={submitForm}
            disabled={!inputValue}
          >
            START THE CHAT!
          </Button>
        </div>
      </div>
      <div id="layout"></div>
    </div>
  );
};
