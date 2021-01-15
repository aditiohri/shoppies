import React from "react";
import Button from "@material-ui/core/Button";

export default function ResultItem({ id, title, year }) {
  return (
    <li key={id}>
      {title} ({year}){" "}
      <Button variant="outlined" size="small">
        Nominate
      </Button>
    </li>
  );
}
