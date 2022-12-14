import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";

import "@fontsource/noto-sans/400.css";
import "@fontsource/roboto-condensed/700.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
