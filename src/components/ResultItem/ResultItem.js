import React from "react";
import Button from "@material-ui/core/Button";

export default function ResultItem({ id, title, year, onNominateMovie }) {
  return (
    <li key={id}>
      {title} ({year}){" "}
      <Button variant="outlined" size="small" onClick={onNominateMovie}>
        Nominate
      </Button>
    </li>
  );
}
