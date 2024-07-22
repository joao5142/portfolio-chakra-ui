import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    primary: "#292727",
    secondary: "#312f2f",
  },
  styles: {
    global: {
      "*": {
        fontFamily: "Poppins,sans-serif",
      },
    },
  },
});

export default theme;
