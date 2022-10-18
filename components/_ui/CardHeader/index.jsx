import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function CardHeader({ title, bgHead, bgBody, color, children }) {
  return (
    <Box w="full" h="full" p={2}>
      <Heading
        as="h4"
        size="sm"
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg={bgHead}
        color={color}
        px={2}
        py={1}
      >
        {title}
      </Heading>
      <Box
        borderWidth="1.5px"
        borderRadius="lg"
        bg={bgBody}
        p={2}
        w="97%"
        overflow="hidden"
        mx="auto"
      >
        {children}
      </Box>
    </Box>
  );
}
