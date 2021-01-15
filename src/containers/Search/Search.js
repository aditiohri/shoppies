import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

export default function Search() {
  const inputValue = useSelector((state) => state.movies.title);
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(actions.saveMovieTitle(e.target.value));
    dispatch(actions.fetchMovies(inputValue));
  };

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
