import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const tealTheme = createTheme({
palette: {
primary: { main: '#214D4C', contrastText: 'white' },
secondary: { main: '#3CA899', contrastText: '#ffffff' }
},
typography: {
fontFamily: 'Arial',
fontSize: 24,
h1: { fontSize: 30 },
h2: { fontSize: 20 }
},
shape: { borderRadius: 0 },
components: {
MuiCssBaseline: {
styleOverrides: `a { color: #3CA899;, fontSize: 40px }`,
},
MuiButton: { defaultProps: { variant: 'contained' } },
MuiTextField: { defaultProps: { variant: 'filled' } }
}
});
