import React, { Component } from "react";
import ResultList from "../../components/ResultsList/ResultsList";

export default class Results extends Component {
  render() {
    return (
      <div>
          <h3>Results for "inputvalue"</h3>
        <ResultList />
      </div>
    );
  }
}
