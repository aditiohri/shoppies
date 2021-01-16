import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Banner({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClick={handleClose}
      >
        <DialogTitle onClose={handleClose}>Congratulations!!!</DialogTitle>
        <DialogContent>
          <DialogContentText>YOU NOMINATED 5 FILMS!!!</DialogContentText>
          <iframe
            title="congratulations"
            src="https://giphy.com/embed/fnK0jeA8vIh2QLq3IZ"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/nbcworldofdance-cute-fun-world-of-dance-fnK0jeA8vIh2QLq3IZ">
              via GIPHY
            </a>
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>X</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
