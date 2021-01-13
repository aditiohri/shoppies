import React, { Component } from "react";
import SearchInput from "../../../components/UI/SearchInput";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
          <h6>Movie Title</h6>
        <SearchInput />
      </div>
    );
  }
}
