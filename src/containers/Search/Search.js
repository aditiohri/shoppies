import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { saveMovieTitle } from "../../store/ducks/movieResults";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(saveMovieTitle(e.target.value));
  };

  const inputValue = useSelector((state) => state.movieResults.title);

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
