import React from "react";
import { Button } from "@material-ui/core";

export default function NominationItem({ movie }) {

    const {imdbID, Title, Year} = movie; 

  return (
    <li key={imdbID}>
      {Title} ({Year}){" "}
      <Button
        variant="outlined"
        size="small"
        onClick={() => console.log("NominationItem: ", movie)}
      >
        Remove
      </Button>
    </li>
  );
}
