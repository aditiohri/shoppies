import React from "react";
import { Button } from "@material-ui/core";

export default function ResultItem({ movie, onNominateMovie }) {

  const {imdbID, Title, Year} = movie; 

  return (
    <li key={imdbID}>
      {Title} ({Year}){" "}
      <Button
        variant="outlined"
        size="small"
        onClick={() => onNominateMovie(movie)}
      >
        Nominate
      </Button>
    </li>
  );
}
