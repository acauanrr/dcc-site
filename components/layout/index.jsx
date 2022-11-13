import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Flex, VStack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex flexDirection="column" justify="space-between" minH="100vh" >
      <Box flex="1 1 0%">
        <Navbar zIndex={4} />
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
