import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../_ui/Logo";

export default function Navbar() {
  const router = useRouter();

  const bg = useColorModeValue("gray.50", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box
      as="header"
      bg={bg}
      w="full"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
      shadow="md"
     
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        w={{ base: "100%", sm: "70%" }}
      >
        <Flex>
          <NextLink
            href="/"
            title="DCC Page"
            display="flex"
            alignItems="center"
            passHref
          >
            <Link>
              <Logo src="/images/logos/logo-dcc-01.png" w={40} />
            </Link>
          </NextLink>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.600"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                DCC
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => router.push("/dcc/apres")}>
                  Apresentação
                </MenuItem>
                <MenuItem>Chefia e Coordenações</MenuItem>
                <MenuItem>História do DCC</MenuItem>
                <MenuItem>Missão e Valores</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Ensino
              </MenuButton>
              <MenuList>
                <MenuItem>Bacharelado em Ciência da Computação</MenuItem>
                <MenuItem>Licenciatura em Informática</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Pesquisa
              </MenuButton>
              <MenuList>
                <MenuItem>Mestrato Profissional em Computação</MenuItem>
                <MenuItem>TCCs e Artigos</MenuItem>
                <MenuItem>Iniciação Científica</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Extensão
              </MenuButton>
              <MenuList>
                <MenuItem>Projetos</MenuItem>
                <MenuItem>Programas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Pessoas
              </MenuButton>
              <MenuList>
                <MenuItem>Professores</MenuItem>
                <MenuItem>Alunos</MenuItem>
                <MenuItem>Ex-alunos</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                md: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
              zIndex={100}
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                >
                  DCC
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => router.push("/dcc/apres")}>
                    Apresentação
                  </MenuItem>
                  <MenuItem>Chefia e Coordenações</MenuItem>
                  <MenuItem>História do DCC</MenuItem>
                  <MenuItem>Missão e Valores</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                >
                  Ensino
                </MenuButton>
                <MenuList>
                  <MenuItem>Bacharelado em Ciência da Computação</MenuItem>
                  <MenuItem>Licenciatura em Informática</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                >
                  Pesquisa
                </MenuButton>
                <MenuList>
                  <MenuItem>Mestrato Profissional em Computação</MenuItem>
                  <MenuItem>TCCs e Artigos</MenuItem>
                  <MenuItem>Iniciação Científica</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                >
                  Extensão
                </MenuButton>
                <MenuList>
                  <MenuItem>Projetos</MenuItem>
                  <MenuItem>Programas</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                >
                  Pessoas
                </MenuButton>
                <MenuList>
                  <MenuItem>Professores</MenuItem>
                  <MenuItem>Alunos</MenuItem>
                  <MenuItem>Ex-alunos</MenuItem>
                </MenuList>
              </Menu>

              {/* <Button w="full" variant="ghost">
                DCC
              </Button>
              <Button w="full" variant="ghost">
                Ensino
              </Button>
              <Button w="full" variant="ghost">
                Pesquisa
              </Button>
              <Button w="full" variant="ghost">
                Extensão/Projetos
              </Button>
              <Button w="full" variant="ghost">
                Pessoas
              </Button> */}
            </VStack>
          </Box>
        </HStack>
        <Flex>
          <Button bg="brand.600" color="white" size="sm">
            DCC Admin
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
