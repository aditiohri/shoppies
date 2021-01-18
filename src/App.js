import Nominations from "./containers/Nominations/Nominations";
import Results from "./containers/Results/Results";
import Search from "./containers/Search/Search";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  results: {
    position: "sticky",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    height: '80vh'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid
      justify="center"
      alignItems="center"
      container
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid container justify="space-between" alignItems="center" spacing={3} className={classes.results}>
        <Grid item xs={12} sm={6}>
          <Results />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Nominations />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
