import {
  chakra,
  Box,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image,
  Heading,
} from "@chakra-ui/react";

export default function Heroes() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="start"
        px={{ base: 4, md: 20 }}
        py={{ base: 0, md: 0 }}
   
      >
        <Badge
          color="white"
          px={3}
          py={1}
          mb={3}
          variant="solid"
          colorScheme="brand"
          rounded="full"
        >
          INFO DCC
        </Badge>
        <Heading
          as="h1"
          mb={6}
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="bold"
          color="white"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
        >
          Fique atualizado do que está acontecendo no DCC!
        </Heading>
        <chakra.form w="full" mb={0}>
          <VisuallyHidden>Seu Email</VisuallyHidden>
          <Box display={{ base: "block", lg: "none" }}>
            <Input
              size={{base: "md", md:"lg"}}
              color="brand.900"
              type="email"
              placeholder="Entre com seu e-mail..."
              bg="white"
            />
            <Button
              w="full"
              mt={2}
              color="white"
              variant="solid"
              colorScheme="brand"
              size={{base: "md", md:"lg"}}
              type="submit"
            >
              Inscrever-se
            </Button>
          </Box>
          <InputGroup size={{base: "sm", md:"lg"}} w="full" display={{ base: "none", lg: "flex" }}>
            <Input
              size={{base: "sm", md:"lg"}}
              color="brand.900"
              type="email"
              placeholder="Entre com seu e-mail..."
              bg="white"
            />
            <InputRightElement w="auto" mr={-0.5}>
              <Button
                color="white"
                variant="solid"
                colorScheme="brand"
                size={{base: "sm", md:"lg"}}
                type="submit"
                roundedLeft={0}
              >
                Inscrever-se
              </Button>
            </InputRightElement>
          </InputGroup>
        </chakra.form>
      </Flex>
      <Flex justifyContent="flex-start" alignItems="center" h="100%">
        <Box h="100%">
          <Image
            src="/images/meninos-front.jpg"
            alt="img"
            boxSize="100%"
            objectFit="contain"
            boxShadow="dark-lg"
            display={{base: "none", md:"flex"}}
          />
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
