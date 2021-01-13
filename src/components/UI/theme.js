import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({});

theme.props = {
  MuiPaper: {
    square: true,
  },
};

theme.overrides = {
  MuiPaper: {
    root: {
      padding: "1rem",
    },
  },
};

export default theme;
