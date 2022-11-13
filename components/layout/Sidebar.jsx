import {
  Box,
  Collapse,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiGroup, BiHistory, BiOutline } from "react-icons/bi";

export default function SideBar(props) {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();

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
              color: "brand.400",
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
      h="full"
      pb="10"
      bg="white"
      _dark={{ bg: "gray.800" }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex flexDirection="row" w="full">
        <Text
          fontSize="2xl"
          color="brand.600"
          fontWeight="semibold"
          textAlign="center"
          w="full"
        >
          DCC
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={CgLoadbarDoc}>Apresentação</NavItem>
        <NavItem icon={BiGroup}>Chefia e Coordenação</NavItem>
        <NavItem icon={BiHistory}>História</NavItem>
        <NavItem icon={BiOutline}>Missão e Valores</NavItem>
        <NavItem icon={HiOutlineOfficeBuilding}>Infraestrutura</NavItem>
      </Flex>
    </Box>
  );
}
