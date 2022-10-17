import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Flex
      // bg="#edf3f8"
      bg="transparent"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" _dark={{ bg: "gray.800" }} rounded="lg" shadow="dark-lg">
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{ color: "gray.100" }}
          >
            <Text as="span" display="block">
              Quer estudar com a gente?
            </Text>
            <Text
              as="span"
              display="block"
              fontSize={{ base: "2xl", sm: "3xl" }}
              color="brand.600"
              _dark={{ color: "gray.500" }}
            >
              Venha mudar sua forma de pensar hoje.
            </Text>
          </Heading>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="brand.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Conheça o DCC
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
