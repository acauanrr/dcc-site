import Head from "next/head";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import CardHeader from "../components/_ui/CardHeader";
import CarouselNews from "../components/_ui/CarouselNews";
import Heroes from "../components/sections/Heroes";
import ItemEvento from "../components/_ui/ItemEvento";
import NextLink from "next/link";

import { VscFilePdf } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import Layout from "../components/layout";

const eventos = [
  {
    id: 1,
    titulo: "JCC - Jornada Científica da Computação",
    assunto: "",
    tipo: "Palestras e Cursos",
    dia: "10",
    mes: "Out",
    href: "",
  },
  {
    id: 2,
    titulo: "Defesa de TCC - Aluno: João Henrique",
    assunto: "Redes de Computadores",
    tipo: "TCC",
    dia: "22",
    mes: "Out",
    href: "",
  },
  {
    id: 3,
    titulo: "Defesa de TCC - Aluna: Maria da Silva",
    assunto: "Desenvolvimento Web",
    tipo: "TCC",
    dia: "05",
    mes: "Nov",
    href: "",
  },
  {
    id: 4,
    titulo: "Evento X",
    tipo: "Palestras e Cursos",
    assunto: "A definir...",
    dia: "12",
    mes: "Nov",
    href: "",
  },
];

export default function Home() {
  return (
    <VStack h="full" w="full">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="locale" content="pt_BR" />
        <title>DCC - Departamento de Ciência da Computação - UFRR</title>
        <meta
          name="description"
          content="Departamento de Ciência da Computação - DCC, vinculado a Universidade Federal de Roraima - UFRR."
        />
        <meta
          property="site_name"
          content="DCC-Departamento de Ciência da Computação"
        />
        <meta property="url" content="https://dcc-site-one.vercel.app/" />
        <meta
          property="image"
          content="https://dcc-site-one.vercel.app/images/logos/logo-dcc-01.png"
        />
        <meta name="author" content="Acauan C. Ribeiro" />
        <meta name="creator" content="Acauan C. Ribeiro" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Flex h="full" w="full" justifyContent="center">
        <Flex w={{ base: "100%", sm: "70%" }}>
          <HStack
            w="full"
            spacing={5}
            flexDirection={{ base: "column", sm: "row" }}
            alignItems="flex-start"
          >
            <Flex w={{ base: "100%", sm: "60%" }}>
              <VStack w="full" pt={4}>
                <CarouselNews />
                <CardHeader
                  bgHead="brand.700"
                  color="white"
                  title="Últimas Notícias"
                  bgBody="white"
                >
                  <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={3}
                    p={0.5}
                    mx="auto"
                  >
                    <VStack
                      borderBottom={{ base: "1px", md: "none" }}
                      borderBottomColor="gray.300"
                      pb={{ base: 2, md: 0 }}
                    >
                      <Box w="70%">
                        <Image
                          alt="profs"
                          src="/images/noticias/professores.png"
                          mx="auto"
                        />
                      </Box>
                      <Heading as="h2" size="sm">
                        Dia dos Professores
                      </Heading>
                      <Text fontSize="xs">
                        Hoje é Dia do Professor e a SBC parabeniza os membros da
                        nossa comunidade que exercem com tanta dedicação esse
                        que é um dos mais nobres fazeres profissionais,{" "}
                      </Text>
                      <Flex w="full" justifyContent="start">
                        <NextLink href="#" passHref>
                          <Link
                            fontSize="xs"
                            color="brand.500"
                            fontWeight="bold"
                            textAlign="left"
                          >
                            Ler mais...
                          </Link>
                        </NextLink>
                      </Flex>
                    </VStack>
                    <VStack
                      borderBottom={{ base: "1px", md: "none" }}
                      borderBottomColor="gray.300"
                      pb={{ base: 2, md: 0 }}
                    >
                      <Box w="70%">
                        <Image
                          alt="logo-footer"
                          src="/images/noticias/noticia1.png"
                          mx="auto"
                        />
                      </Box>
                      <Heading as="h2" size="sm">
                        Colação de Grau - Formandos 2021.2
                      </Heading>
                      <Text fontSize="xs">
                        Ocorreu nesta última terça-feira dia 18, a colação de
                        grau dos alunos do Curso de Ciência da Computação. Foram
                        8 alunos,{" "}
                      </Text>
                      <Flex w="full" justifyContent="start">
                        <NextLink href="#" passHref>
                          <Link
                            fontSize="xs"
                            color="brand.500"
                            fontWeight="bold"
                            textAlign="left"
                          >
                            Ler mais...
                          </Link>
                        </NextLink>
                      </Flex>
                    </VStack>
                    <VStack fontSize="xs" fontWeight="semibold" spacing={3}>
                      <NextLink
                        href="https://teletime.com.br/21/09/2022/starlink-supera-concorrentes-de-internet-via-satelite-no-brasil-aponta-ookla/"
                        passHref
                      >
                        <Link isExternal>
                          <HStack>
                            <FiExternalLink size="25px" />
                            <Text>
                              Starlink supera concorrentes de Internet via
                              satélite no Brasil, aponta Ookla
                            </Text>
                          </HStack>
                        </Link>
                      </NextLink>
                      <NextLink
                        href="https://www.bbc.com/portuguese/geral-60156277"
                        passHref
                      >
                        <Link isExternal>
                          <HStack>
                            <FiExternalLink size="25px" />
                            <Text>
                              O que é apocalipse quântico e existe razão para
                              preocupação?
                            </Text>
                          </HStack>
                        </Link>
                      </NextLink>
                      <NextLink
                        href="https://canaltech.com.br/ciencia/agencia-de-inteligencia-dos-eua-quer-recriar-mamutes-extintos-227359/"
                        passHref
                      >
                        <Link isExternal>
                          <HStack>
                            <FiExternalLink size="25px" />
                            <Text>
                              Agência de Inteligência dos EUA quer recriar
                              mamutes extintos
                            </Text>
                          </HStack>
                        </Link>
                      </NextLink>
                      <NextLink
                        href="https://canaltech.com.br/software/por-que-a-geracao-z-pode-nao-gostar-da-linguagem-de-programacao-python-225719/"
                        passHref
                      >
                        <Link isExternal>
                          <HStack>
                            <FiExternalLink size="25px" />
                            <Text>
                              Por que a Geração Z pode não gostar da linguagem
                              de programação Python?
                            </Text>
                          </HStack>
                        </Link>
                      </NextLink>
                      <Flex w="full" justifyContent="start">
                        <NextLink href="#" passHref>
                          <Link
                            fontSize="xs"
                            color="brand.500"
                            fontWeight="bold"
                            textAlign="left"
                          >
                            Todas as Notícias...
                          </Link>
                        </NextLink>
                      </Flex>
                    </VStack>
                  </SimpleGrid>
                </CardHeader>
              </VStack>
            </Flex>

            <Flex w={{ base: "100%", sm: "40%" }}>
              <VStack
                w={{ base: "100%", sm: "90%" }}
                alignItems="flex-start"
                pt={4}
                spacing={4}
              >
                <CardHeader
                  bgHead="red.700"
                  color="white"
                  title="Acesso Rápido"
                  bgBody="white"
                >
                  <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={3}
                    p={0.5}
                    mx="auto"
                    // h="20"
                  >
                    <Box
                      as="button"
                      rounded="lg"
                      px={1}
                      py={2}
                      _hover={{ bg: "brand.50" }}
                      _active={{
                        bg: "#dddfe2",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                      }}
                    >
                      <HStack color="brand.700">
                        <Box right={0}>
                          <VscFilePdf fontSize="180%" />
                        </Box>
                        <Text textAlign="start" fontSize="xs" fontWeight="bold">
                          Disciplinas - Semestre 2022
                        </Text>
                      </HStack>
                    </Box>
                    <Box
                      as="button"
                      rounded="lg"
                      px={1}
                      py={2}
                      _hover={{ bg: "brand.50" }}
                      _active={{
                        bg: "#dddfe2",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                      }}
                    >
                      <HStack color="brand.700">
                        <Box right={0}>
                          <VscFilePdf fontSize="180%" />
                        </Box>
                        <Text textAlign="start" fontSize="xs" fontWeight="bold">
                          PPC do Curso
                        </Text>
                      </HStack>
                    </Box>
                    <Box
                      as="button"
                      rounded="lg"
                      px={1}
                      py={2}
                      _hover={{ bg: "brand.50" }}
                      _active={{
                        bg: "#dddfe2",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                      }}
                    >
                      <HStack color="brand.700">
                        <Box right={0}>
                          <VscFilePdf fontSize="180%" />
                        </Box>
                        <Text textAlign="start" fontSize="xs" fontWeight="bold">
                          Manual do Aluno
                        </Text>
                      </HStack>
                    </Box>
                  </SimpleGrid>
                </CardHeader>
                <CardHeader
                  bgHead="green.600"
                  bgBody="white"
                  color="white"
                  title="Eventos"
                >
                  {" "}
                  <VStack w="full">
                    <VStack w="70%">
                      {eventos?.map((evento) => (
                        <ItemEvento
                          key={evento.id}
                          dia={evento.dia}
                          mes={evento.mes}
                          tipo={evento.tipo}
                          titulo={evento.titulo}
                          assunto={evento.assunto}
                          href={evento.href}
                        />
                      ))}
                    </VStack>
                  </VStack>
                </CardHeader>
                <HStack w="full" spacing={0} p={5}>
                  <Center w="50%">
                    <NextLink
                      href="https://www.instagram.com/cacc.ufrr/"
                      passHref
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        _hover={{ opacity: "85%" }}
                        isExternal
                      >
                        <Flex boxSize="36">
                          <Image
                            alt="logo-footer"
                            src="/images/logos/logo-cacc.png"
                          />
                        </Flex>
                        <Text
                          textAlign="center"
                          fontSize="xs"
                          fontWeight="bold"
                          pt={0.5}
                        >
                          CENTRO ACADÊMICO
                        </Text>
                      </Link>
                    </NextLink>
                  </Center>
                  <Center w="50%">
                    <NextLink
                      href="https://www.instagram.com/atleticanexus/"
                      passHref
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        _hover={{ opacity: "90%" }}
                        isExternal
                      >
                        <Flex boxSize="36">
                          <Image
                            alt="logo-footer"
                            src="/images/logos/nexus-logo.png"
                          />
                        </Flex>
                        <Text
                          textAlign="center"
                          fontSize="xs"
                          fontWeight="bold"
                          pt={0.5}
                        >
                          ATLÉTICA
                        </Text>
                      </Link>
                    </NextLink>
                  </Center>
                </HStack>
              </VStack>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      <Flex
        w="full"
        justifyContent="center"
        bgImage="url('/images/banner-blue.png')"
        bgPosition="center 30px"
        bgRepeat="no-repeat"
      >
        <Flex w={{ base: "100%", sm: "70%" }} h="2xs" mt={5} zIndex={100}>
          <Heroes />
        </Flex>
      </Flex>
    </VStack>
  );
}
