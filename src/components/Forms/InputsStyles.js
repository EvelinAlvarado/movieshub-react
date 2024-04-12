import { createTheme } from "@mui/material/styles";

export const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "var(--grey-dark-color)",
            "--TextField-brandBorderHoverColor": "var(--secondary-color)",
            "--TextField-brandBorderFocusedColor": "var(--primary-color)",
            "& label": {
              color: "var(--TextField-brandBorderColor)",
            },
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            backgroundColor: "var(--grey-darkest-color)",
            borderRadius: "7px 7px 0 0",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            color: "var(--TextField-brandBorderHoverColor)",
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: "var(--secondary-color)",
            /* backgroundColor: "var(--grey-darkest-color)", */
            borderRadius: "7px",

            /* "& .Mui-focused": {
              color: "var(--primary-color)",
            }, */
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: "var(--grey-darkest-color)",
            borderRadius: "7px 7px 0 0",
            "&::before, &::after": {
              borderBottom: "2px solid var(--grey-dark-color)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--secondary-color)",
            },
            "&:hover:not(.Mui-disabled)": {
              backgroundColor: "var(--grey-darkest-color)",
            },
            "&.Mui-focused": {
              backgroundColor: "var(--grey-darkest-color)",
            },
            "&.Mui-focused:after": {
              borderBottom: "2px solid var(--primary-color)",
            },
          },
          icon: {
            color: "var(--grey-dark-color)",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "var(--grey-dark-color)",
          },
          /* "&.Mui-focused": {
            color: "red",
          }, */
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: "var(--grey-darkest-color)",
          },
          list: {
            color: "var(--secondary-color)",
          },
        },
      },
    },
  });
