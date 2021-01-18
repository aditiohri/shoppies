import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#95bf47",
      main: "#52afb3",
      dark: "#004c3f",
    },
    secondary: {
      light: "#b6deeb",
      main: "#fbf7ed",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
    },
  },
});

theme.props = {
  MuiPaper: {
    square: true,
  },
  MuiButton: {
    size: "small",
  },
};

theme.overrides = {
  MuiPaper: {
    root: {
      padding: "1rem",
    },
  },
  MuiButton: {
    outlinedPrimary: {
      backgroundColor: '#fff',
      color: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: '#fff',
      }
    },
    containedSecondary: {
      color: theme.palette.error.dark,
      "&:hover": {
        backgroundColor: theme.palette.error.light,
        color: '#fff'
      }
    }
  },
};

export default theme;
