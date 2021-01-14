import React, { Component } from "react";
import ResultList from "../../components/ResultsList/ResultsList";

import Paper from '@material-ui/core/Paper';


export default class Results extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    let data = {}
    console.log("Results.js mounted");
    fetch(`http://www.omdbapi.com/?s=Lord&type=movie&apikey=${process.env.REACT_APP_APIKEY}`)
      .then((response) => response.json())
      .then((json) => Object.assign(data, json))
      .then(() => console.log("results: ", data));
  }
  render() {
    return (
      <Paper>
          <h3>Results for "inputvalue"</h3>
        <ResultList />
      </Paper>
    );
  }
}
