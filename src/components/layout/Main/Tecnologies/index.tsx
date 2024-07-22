import { Container } from "@/components/wrapper/Container";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export function Tecnologies() {
  const tecnologies = [
    {
      title: "Vue",
      image: "/images/tecnologies/vue.svg",
    },
    {
      title: "React",
      image: "/images/tecnologies/react.svg",
    },
    {
      title: "Sass",
      image: "/images/tecnologies/sass.svg",
    },
    {
      title: "Laravel",
      image: "/images/tecnologies/laravel.svg",
    },
    {
      title: "Next Js",
      image: "/images/tecnologies/next.svg",
    },
    {
      title: "Nuxt",
      image: "/images/tecnologies/nuxt.svg",
    },
    {
      title: "Styled Components",
      image: "/images/tecnologies/styled.svg",
    },
    {
      title: "Typescript",
      image: "/images/tecnologies/typescript.svg",
    },
    {
      title: "Docker",
      image: "/images/tecnologies/docker.svg",
    },
    {
      title: "Prime Vue",
      image: "/images/tecnologies/prime.svg",
    },
    {
      title: "Vitest",
      image: "/images/tecnologies/vitest.svg",
    },
    {
      title: "Node",
      image: "/images/tecnologies/node.svg",
    },

    {
      title: "Node",
      image: "/images/tecnologies/node.svg",
    },
    {
      title: "Vuetify",
      image: "/images/tecnologies/vuetify.svg",
    },
    {
      title: "Tailwind",
      image: "/images/tecnologies/tailwind.svg",
    },
    {
      title: "Nest",
      image: "/images/tecnologies/nest.svg",
    },
  ];
  return (
    <Container>
      <Text fontSize={"xx-large"} fontWeight={"bold"} mt={"10rem"}>
        Tecnologias
      </Text>

      <Grid
        templateColumns={{ base: "1fr 1fr", md: "repeat(3,1fr)" }}
        gap={"4rem"}
        mt={"5rem"}
      >
        {tecnologies.map((tecnology, index) => (
          <GridItem key={"tecnology" + index} h={"100%"}>
            <Flex
              direction={"column"}
              align={"center"}
              justifyContent={"space-between"}
              gap={"1rem"}
              h={"100%"}
            >
              <Image src={tecnology.image} w={"80px"} h={"80px"} />
              <Text textAlign={"center"}>{tecnology.title}</Text>
              <Box
                h={"2px"}
                w={"100%"}
                bgGradient={"linear(to-r,white,gray.200,white)"}
              ></Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
