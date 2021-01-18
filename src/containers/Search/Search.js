import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import { Paper, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "100",
  },
});

export default function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(actions.saveMovieTitle(e.target.value));
  };
  const handleChange = (e) => {
    dispatch(actions.fetchMovies(e.target.value));
  };

  return (
    <Paper className={classes.root}>
      <h2>The Shoppies</h2>
      <TextField
        variant="outlined"
        label="Movie Title"
        onChange={handleChange}
        onInput={handleInput}
        value={useSelector((state) => state.movies.title)}
        fullWidth
      />
    </Paper>
  );
}
