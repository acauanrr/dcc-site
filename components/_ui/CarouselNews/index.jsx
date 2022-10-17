import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function CarouselNews() {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      img: "/images/destaques/ict.png",
      label: "2° Lugar no Brazil ICT Competition 2021!",
      description:
        "A equipe do Departamento de Ciência da Computação-UFRR, composta pelos discentes Luis Sales, João Rodrigues e Miller Correia, orientados pelo Prof. Dr. Leandro Balico, ganhou o segundo lugar no Brazil ICT Competition 2021 National Final!!! 😁👏💪",
    },
    {
      img: "/images/destaques/maratona.png",
      label: "Final da Maratona de Programação SBC",
      description:
        "A equipe do curso de Ciência da Computação da Universidade Federal de Roraima, intitulado KLM, formado pelos estudantes Miller Raycell Correia, André Leandro Schillreff e Markus Kaul Gerrits, e o coach, Prof. Acauan Ribeiro, participaram em novembro de 2020 da Fase 1 da eliminatória brasileira da ‘XXV Maratona de Programação da SBC/ICPC’, competição internacionalmente conhecida como um “celeiro de talentos em computação”.",
    },
    {
      img: "/images/destaques/melhor-artigo.png",
      label: "Prêmio Melhor Artigo",
      description:
        "Professor Filipe Dwan foi reconhecido como o melhor artigo no Simpósio Brasileiro de Educação em Computação (EduComp/SBC)",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 6000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      w="70%"
      h="50%"
      pt={3}
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        w="full"
        pos="relative"
        overflow="hidden"
        justifyContent="flex-start"
      >
        <Flex h={{ base: "240px", md: "270px" }} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="contain"
              />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
