import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import Paper from "@material-ui/core/Paper";
import NominationItem from "../../components/NominationsItem/NominationItem";
import Banner from "../../components/UI/Banner";

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

  const [openBanner, setBannerState] = useState(false);

  const handleCloseBanner = () => {
    setBannerState(false);
  };

  useEffect(() => {
    if (nominations.length === 5) {
      setBannerState(true)
    }
  }, [nominations.length])

  return (
    <Paper>
      {nominationsTitle}
      <ul>{nominationsList}</ul>
      <Banner open={openBanner} handleClose={handleCloseBanner} />
    </Paper>
  );
}
