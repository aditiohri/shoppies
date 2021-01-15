import React from "react";
import { Button } from '@material-ui/core';

export default function ResultItem({ movie, onNominateMovie }) {
  return (
    <li key={movie.id}>
      {movie.title} ({movie.year}){" "}
      <Button variant="outlined" size="small" onClick={onNominateMovie(movie)}>
        Nominate
      </Button>
    </li>
  );
}
