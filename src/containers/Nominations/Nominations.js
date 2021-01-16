import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import Paper from "@material-ui/core/Paper";
import NominationItem from "../../components/NominationsItem/NominationItem";

export default function Nominations() {
  const dispatch = useDispatch();

  const handleRemoveNomination = (movieID) => {
    dispatch(actions.removeMovie(movieID));
  };

  const nominations = useSelector((state) => state.movies.nominations);

  let nominationsTitle, nominationsList;

  if (nominations.length > 0) {
    nominationsTitle = <h3>Nominations</h3>;
    nominationsList = nominations.map((movie, id) => (
      <NominationItem
        movie={movie}
        key={id + movie["imdbID"]}
        handleRemoveNomination={handleRemoveNomination}
      />
    ));
  } else {
    nominationsList = null;
    nominationsTitle = <h3>Nominate up to 5 movies!</h3>;
  }

  return (
    <Paper>
      {nominationsTitle}
      <ul>{nominationsList}</ul>
    </Paper>
  );
}
