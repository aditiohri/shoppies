import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { 
      light: "#95bf47", 
      main: "#52afb3",
    dark: '#004c3f' },
    secondary:  { 
      light: "#b6deeb", 
      main: "#fbf7ed" },
  },
});

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
