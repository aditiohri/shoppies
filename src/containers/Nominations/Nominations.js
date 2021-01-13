import React, { Component } from "react";
import NominationsList from "../../components/NominationsList/NominationsList";

import Paper from '@material-ui/core/Paper';

export default class Nominations extends Component {
  render() {
    return (
      <Paper>
        <h3>Nominations</h3>
        <NominationsList />
      </Paper>
    );
  }
}
