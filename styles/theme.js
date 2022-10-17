import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Noto Sans', sans-serif`,
    heading: `'Roboto Condensed', sans-serif`,
  },
  colors: {
    brand: {
      50: "#EDF2FC",
      100: "#DCE6FA",
      200: "#C9D9F7",
      300: "#A6BFF2",
      400: "#7099EB",
      500: "#3B73E3",
      600: "#143D8F",
      700: "#143D8F",
      800: "#0D2659",
      900: "#081735",
    },
  },
});

export default theme;
