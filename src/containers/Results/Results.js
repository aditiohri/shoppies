import React, { Component } from "react";
import ResultList from "../../components/ResultsList/ResultsList";

import Paper from '@material-ui/core/Paper';


export default class Results extends Component {
  state = {
    results: [],
    loading: true
  };

  componentDidMount() {
    console.log("Results.js mounted");
    fetch(`http://www.omdbapi.com/?s=Lord&type=movie&apikey=${process.env.REACT_APP_APIKEY}`)
      .then((response) => response.json())
      .then(movies => {
        const fetchedMovies = []
        for (let key in movies.Search) {
          const { Title, Year } = movies.Search[key]
          // console.log(Title, Year)
          fetchedMovies.push({
            title: Title,
            year: Year
          })
        }
        this.setState({ results: fetchedMovies, loading: false })
      });
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
