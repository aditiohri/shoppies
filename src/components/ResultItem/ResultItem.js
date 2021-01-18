import React from "react";
import { Button } from "@material-ui/core";

export default function ResultItem({ movie, onNominateMovie, disabled }) {

  const {imdbID, Title, Year} = movie; 

  return (
    <li key={imdbID}>
      {Title} ({Year}){" "}
      <Button
        onClick={() => onNominateMovie(movie)}
        disabled={disabled}
        variant="outlined"
        color="primary"
      >
        Nominate
      </Button>
    </li>
  );
}
