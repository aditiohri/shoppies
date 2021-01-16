import React from "react";
import { Button } from "@material-ui/core";

export default function NominationItem({ movie, handleRemoveNomination }) {
  
    const { imdbID, Title, Year } = movie;

  return (
    <li key={imdbID}>
      {Title} ({Year}){" "}
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleRemoveNomination(imdbID)}
      >
        Remove
      </Button>
    </li>
  );
}
