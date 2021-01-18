import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  makeStyles,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
  },
}));

export default function Banner({ open, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClick={handleClose}
      >
        <DialogTitle onClose={handleClose} className={classes.root}>
          Congratulations!!!
          <Button onClick={handleClose} className={classes.closeButton}>X</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>YOU NOMINATED 5 FILMS!!!</DialogContentText>
          <iframe
            title="congratulations"
            src="https://giphy.com/embed/fnK0jeA8vIh2QLq3IZ"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
