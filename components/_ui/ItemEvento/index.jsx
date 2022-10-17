import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ItemEvento({ dia, mes, tipo, titulo, assunto, href }) {
  return (
    <Box
      as="button"
      w="full"
      border="1px"
      borderColor="darkcyan"
      borderRightRadius="lg"
      _hover={{ bg: "#ebedf0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      href={href}
    >
      <HStack>
        <VStack spacing={0.7}>
          <Text
            bgColor="darkcyan"
            color="white"
            py={0.5}
            px={1}
            fontSize="md"
            w="full"
          >
            {dia}
          </Text>
          <Text
            bgColor="darkcyan"
            color="white"
            py={0.5}
            px={1}
            fontSize="xs"
            w="full"
          >
            {mes}
          </Text>
        </VStack>
        <VStack spacing={0} alignItems="flex-start">
          <Text color="gray" fontSize="2xs">
            {tipo}
          </Text>
          <Heading as="h4" fontSize="sm">
            {titulo}
          </Heading>
          <Text color="brand.700" fontSize="xs">
            {assunto}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
