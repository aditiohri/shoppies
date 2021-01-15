import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { findMovieTitle } from "../../store/ducks/movieQuery";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(findMovieTitle(e.target.value));
  };

  const inputValue = useSelector((state) => state.movieQuery.title);

  return (
    <>
      <h2>The Shoppies</h2>
      <Paper>
        <TextField
          variant="outlined"
          label="Movie Title"
          onChange={handleChange}
          value={inputValue}
          fullWidth
        />
      </Paper>
    </>
  );
}
