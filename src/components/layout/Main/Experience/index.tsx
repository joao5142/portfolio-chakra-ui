import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Container } from "@/components/wrapper/Container/index";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export function Experience() {
  const experiences = [
    {
      title: "Fone Ninja",
      year: "2024",
      habilities: [
        "Utilização do  laravel",
        "Utilização de filas com redis",
        "Utilização do Nuxt 3",
        "Utilização do Tailwind",
        "Utilização do pinia",
        "Utilização do PrimeVue",
        "Utilização do typescript",
        "Utilização de pwa",
        "Utilização do vitest",
      ],
    },
    {
      title: "Youshop",
      year: "2024",
      habilities: [
        "Utilização do Nuxt 2",
        "Utilização do vue 2",
        "Utilização do vuetify",
        "Utilização do vuex",
        "Utilização do sass",
        "Utilização do typescript",
      ],
    },
    {
      title: "Treinutri",
      year: "2023",
      habilities: [
        "Utilização do  laravel",
        "Utilização do Nuxt",
        "Utilização do vuetify",
        "Utilização do PrimeVue",
        "Utilização do pinia",
        "Utilização do typescript",
        "Utilização de pwa",
      ],
    },
    {
      title: "Mvc Editora",
      year: "2022",
      habilities: [
        "Utilização do laravel",
        "Utilização do vue 2",
        "Utilização do vue 3",
        "Utilização do Nuxt 3",
        "Utilização do vuetify",
        "Utilização do sass",
        "Utilização do pinia",
        "Utilização do typescript",
        "Utilização do vitest",
      ],
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });
  return (
    <Container>
      <Text fontSize={"xx-large"} fontWeight={"bold"} mt={"10rem"}>
        Experiências
      </Text>

      <Box ref={sliderRef} className="keen-slider" mt={"3rem"}>
        {experiences.map((experience, index) => (
          <Box key={"experience" + index} className="keen-slider__slide">
            <Flex align={"center"} justify={"space-between"}>
              <Text fontSize={"large"} fontWeight={"medium"}>
                {experience.title}
              </Text>
              <Text fontSize={"x-small"}>{experience.year}</Text>
            </Flex>

            <Box mt={"2rem"}>
              <UnorderedList pl={2}>
                {experience.habilities.map((hability, index) => (
                  <ListItem mb={3} key={"hability" + index}>
                    {hability}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        ))}
      </Box>

      <Flex justify={"end"} gap={"1rem"}>
        <Button onClick={() => instanceRef.current?.prev()}>
          <ChevronLeftIcon />
        </Button>
        <Button onClick={() => instanceRef.current?.next()}>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Container>
  );
}
