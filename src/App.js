import Nominations from "./containers/Nominations/Nominations";
import Results from "./containers/Results/Results";
import Search from "./containers/Search/Search";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignContent="center"
      spacing={2}
    >
      <Grid item xs={12} sm={12}>
        <Search />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Results />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Nominations />
      </Grid>
    </Grid>
  );
}

export default App;
