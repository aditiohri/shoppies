import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";

import Paper from '@material-ui/core/Paper';


export default class Search extends Component {
  render() {
    return (
      <>
        <h2>The Shoppies</h2>
      <Paper>
        <SearchBar />
      </Paper>
      </>
    );
  }
}
