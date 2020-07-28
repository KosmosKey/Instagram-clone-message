import React from "react";
import {
  Container,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core";

export const NavigationBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
