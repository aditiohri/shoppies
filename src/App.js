import Nominations from "./containers/Nominations/Nominations";
import Results from "./containers/Results/Results";
import Search from "./containers/Search/Search";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
    
  },
  results: {
    position: "sticky",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    height: "80vh",
  },
  div: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid
      justify="center"
      alignContent="center"
      alignItems="center"
      container
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid
        container
        // justify="center"
        // alignContent="center"
        // alignItems="center"
        spacing={3}
        className={classes.results}
      >
        <Grid item xs={12} sm={6} className={classes.div}>
          <Results />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.div}>
          <Nominations />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
