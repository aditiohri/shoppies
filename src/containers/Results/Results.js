import React, { Component } from "react";
import ResultList from "../../components/ResultsList/ResultsList";

import Paper from '@material-ui/core/Paper';


export default class Results extends Component {
  render() {
    return (
      <Paper>
          <h3>Results for "inputvalue"</h3>
        <ResultList />
      </Paper>
    );
  }
}
