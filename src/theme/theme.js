import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";
import colors from "./colors";
import styles from "./styles";
import Container from "./components/Container";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: {
    Container,
  },
  breakpoints,
});
