import Nominations from "./containers/Nominations/Nominations";
import Results from "./containers/Results/Results";
import Search from "./containers/Search/Search";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    height: "80vh",
    top: "8rem",
    overflow: "auto",
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid justify="center" alignItems="center" container spacing={2}>
      <Grid item xs={12} sm={12}>
        <Search />
      </Grid>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        spacing={3}
        className={classes.root}
        mx="auto"
      >
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
