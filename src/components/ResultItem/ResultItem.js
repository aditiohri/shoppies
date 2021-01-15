import React from "react";
import Button from "@material-ui/core/Button";

export default function ResultItem({ id, movie onNominateMovie }) {
  return (
    <li key={id}>
      {movie.title} ({movie.year}){" "}
      <Button variant="outlined" size="small" onClick={onNominateMovie(movie)}>
        Nominate
      </Button>
    </li>
  );
}
