import React, { Component } from "react";

import Paper from '@material-ui/core/Paper';
import NominationItem from "../../components/NominationsItem/NominationItem";

export default class Nominations extends Component {
  render() {
    return (
      <Paper>
        <h3>Nominations</h3>
        <ul>
            <NominationItem />
            <NominationItem />
            <NominationItem />
        </ul>
      </Paper>
    );
  }
}
