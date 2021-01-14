import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

export default class Search extends Component {
  state = {
    inputValue: "",
  };
  render() {
    return (
      <>
        <h2>The Shoppies</h2>
        <Paper>
          <TextField variant="outlined" label="Movie Title" fullWidth />
        </Paper>
      </>
    );
  }
}
