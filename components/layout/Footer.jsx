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

import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      bg="gray.100"
      _dark={{ bg: "gray.600" }}
      w="full"
      pt={{ base: 0, sm: 4 }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        w={{ base: "100%", sm: "50%" }}
        mx="auto"
        justify="space-between"
        p={10}
      >
        <Flex
          justify={{ base: "space-evenly", md: "center" }}
          gap={{ base: 0, md: 3 }}
        >
          <Image
            alt="logo-footer"
            src="/images/logos/logo-dcc-03.png"
            boxSize={{ base: "14", md: "16" }}
            shadow="md"
          />
          <Image
            alt="logo-ufrr"
            src="/images/logos/logo_ufrr.png"
            boxSize="16"
            shadow="md"
          />
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "10px", md: "12px" }}
          color="gray.800"
          _dark={{ color: "white" }}
          textAlign={{ base: "left", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Heading as="h2" size="xs">
              Institucional
            </Heading>
            <Link textTransform="uppercase">Site UFRR</Link>
            <Link textTransform="uppercase">Site CCT</Link>
            <Link textTransform="uppercase">Site NEAD</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Heading as="h2" size="xs">
              Documentos
            </Heading>
            <Link textTransform="uppercase">Calendário UFRR</Link>
            <Link textTransform="uppercase">Editais</Link>
            <Link textTransform="uppercase">Regimento DCC</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Heading as="h2" size="xs">
              Contato
            </Heading>
            <Link textTransform="uppercase">Email</Link>
            <Link textTransform="uppercase">Whatsapp</Link>
          </Flex>
        </HStack>
      </Stack>
      <Box fontSize="2xs" lineHeight={1} w="full" pt={0}>
        <VStack mx="auto">
          <Heading as="h2" size="xs">
            Endereço
          </Heading>
          <Text>UFRR, Campus Paricarana, CCT</Text>
          <Text>Av. Capitão Ene Garcez, 2413 - Bairro Aeroporto. </Text>
          <Text>Boa Vista - Roraima RR. 69304-000</Text>
        </VStack>
      </Box>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{ color: "#F9FAFB" }}
        h="2px"
      />
      <VStack py={4}>
        <HStack justify="center">
          <NextLink href="https://www.facebook.com/dccufrr" passHref>
            <Link isExternal>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
          </NextLink>

          <NextLink href="https://www.instagram.com/dcc.ufrr/" passHref>
            <Link isExternal>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/company/ciencia-da-computacao-ufrr/"
            passHref
          >
            <Link isExternal>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </NextLink>
        </HStack>

        <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
          &copy; DCC - UFRR
        </Text>
      </VStack>
    </Box>
  );
}
