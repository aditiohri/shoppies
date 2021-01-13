import React, { Component } from "react";
import NominationsList from "../../components/NominationsList/NominationsList";

export default class Nominations extends Component {
  render() {
    return (
      <div>
        <h3>Nominations</h3>
        <NominationsList />
      </div>
    );
  }
}
