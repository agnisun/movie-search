import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";
import colors from "./colors";
import styles from "./styles";
import Container from "./components/Container";

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: {
    Container,
  },
});
