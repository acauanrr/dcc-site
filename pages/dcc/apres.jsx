import { useEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import SideBar from "../../components/layout/Sidebar";

import { AiOutlineHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

export default function ApresentacaoDCC() {
  const sidebar = useDisclosure();
  const navbarMobile = useDisclosure();

  useEffect(() => {
    navbarMobile.onClose();
  });

  return (
    <Flex h="full" w="full" justifyContent="center" p={10}>
      <HStack w={{ base: "100%", sm: "60%" }}>
        <SideBar display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SideBar w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <VStack h="full">
            {/* <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
              alignSelf="start"
            /> */}
            <Box alignSelf="start">
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
                fontWeight="bold"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <HStack spacing={1}>
                      <AiOutlineHome fontSize="18" />
                      <Text>Home</Text>
                    </HStack>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">DCC</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Apresentação</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Heading>Apresentação DCC</Heading>
            <Box px={{ base: 1, md: 5 }} pt={5}>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit modi repudiandae maiores sed accusantium excepturi
                pariatur ea, non amet quidem aspernatur at recusandae molestiae?
                Ex, quam commodi quos fugit recusandae ducimus deleniti ullam
                sit voluptatum totam! Unde quas harum optio, voluptatibus culpa
                consectetur repellendus dolorum, nam nisi illo magnam ex!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur, adipisci. Provident odit quis debitis cupiditate
                quaerat explicabo magnam distinctio, quod quae aperiam dicta
                expedita possimus exercitationem consequuntur eligendi nam
                maiores.
              </Text>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
}
