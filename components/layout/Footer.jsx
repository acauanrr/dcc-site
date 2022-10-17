import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Logo from "../_ui/Logo";

export default function Footer() {
  return (
    <Box bg="gray.100" _dark={{ bg: "gray.600" }} w="full">
      <Stack
        direction={{ base: "column", lg: "row" }}
        w={{ base: "100%", sm: "50%" }}
        mx="auto"
        justify="space-between"
        p={10}
      >
        <Flex justify="center" gap={3}>
          <Image
            alt="logo-footer"
            src="/images/logos/logo-dcc-03.png"
            boxSize="16"
          />
          <Image
            alt="logo-ufrr"
            src="/images/logos/logo_ufrr.png"
            boxSize="16"
          />
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "14px" }}
          color="gray.800"
          _dark={{ color: "white" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Heading as="h2" size="sm">
              Insctitucional
            </Heading>
            <Link textTransform="uppercase">Site UFRR</Link>
            <Link textTransform="uppercase">Site CCT</Link>
            <Link textTransform="uppercase">Site NEAD</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Heading as="h2" size="sm">
              Documentos
            </Heading>
            <Link textTransform="uppercase">Calendário UFRR</Link>
            <Link textTransform="uppercase">Editais</Link>
            <Link textTransform="uppercase">Regimento DCC</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Heading as="h2" size="sm">
              Contato
            </Heading>
            <Link textTransform="uppercase">Email</Link>
            <Link textTransform="uppercase">Whatsapp</Link>
            <Heading as="h2" size="sm" mt={2}>
              Endereço
            </Heading>
            <Text>Av. Tals</Text>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{ color: "#F9FAFB" }}
        h="2px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              color="gray.800"
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>
          <Link>
            <Icon
              color="gray.800"
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FiTwitter}
            />
          </Link>
          <Link>
            <Icon
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
          <Link>
            <Icon
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
        </HStack>

        <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
          &copy; DCC - UFRR
        </Text>
      </VStack>
    </Box>
  );
}
