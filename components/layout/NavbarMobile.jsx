import { useState } from "react";
import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaBell,
  FaClipboardCheck,
  FaRss,
  FaCode,
  FaNetworkWired,
} from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill, BsFillPeopleFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection, HiOutlineAcademicCap } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { ImLab } from "react-icons/im";

import { useRouter } from "next/router";

import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../_ui/Logo";

export default function NavbarMobile(props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { navm } = props;
  const dcc = useDisclosure();
  const ensino = useDisclosure();
  const pesquisa = useDisclosure();
  const extensao = useDisclosure();
  const pessoas = useDisclosure();

  function handleRouter(url) {
    router.push(url);
    navm.onClose();
  }

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;

    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{ color: "gray.400" }}
        _hover={{
          bg: "gray.100",
          _dark: { bg: "gray.900" },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: "brand.200",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{ bg: "gray.800" }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex w="full" justifyContent="center" py={5}>
        <Logo src="/images/logos/logo-dcc-01.png" w="50%" />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome} onClick={() => handleRouter("/")}>
          Home
        </NavItem>

        <NavItem icon={FaCode} onClick={dcc.onToggle}>
          DCC
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={dcc.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={dcc.isOpen}>
          <NavItem pl="12" py="2" onClick={() => handleRouter("/dcc/apres")}>
            Apresentação
          </NavItem>
          <NavItem pl="12" py="2">
            Chefia e Coordenações
          </NavItem>
          <NavItem pl="12" py="2">
            Missão e Valores
          </NavItem>
        </Collapse>

        <NavItem icon={HiOutlineAcademicCap} onClick={ensino.onToggle}>
          Ensino
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={ensino.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={ensino.isOpen}>
          <NavItem pl="12" py="2">
            Bacharelado em Ciência da Computação
          </NavItem>
          <NavItem pl="12" py="2">
            Licenciatura em Informática EaD
          </NavItem>
        </Collapse>

        <NavItem icon={ImLab} onClick={pesquisa.onToggle}>
          Pesquisa
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={pesquisa.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={pesquisa.isOpen}>
          <NavItem pl="12" py="2">
            Mestrato Profissional em Computação
          </NavItem>
          <NavItem pl="12" py="2">
            TCCs e Artigos
          </NavItem>
          <NavItem pl="12" py="2">
            Iniciação Científica
          </NavItem>
        </Collapse>

        <NavItem icon={FaNetworkWired} onClick={extensao.onToggle}>
          Extensão
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={extensao.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={extensao.isOpen}>
          <NavItem pl="12" py="2">
            Projetos
          </NavItem>
          <NavItem pl="12" py="2">
            Programas UFRR
          </NavItem>
        </Collapse>

        <NavItem icon={BsFillPeopleFill} onClick={pessoas.onToggle}>
          Pessoas
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={pessoas.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={pessoas.isOpen}>
          <NavItem pl="12" py="2">
            Professores
          </NavItem>
          <NavItem pl="12" py="2">
            Alunos
          </NavItem>
          <NavItem pl="12" py="2">
            Ex-alunos
          </NavItem>
        </Collapse>
      </Flex>
    </Box>
  );
}
