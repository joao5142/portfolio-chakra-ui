import { Container } from "@/components/wrapper/Container";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export function Tecnologies() {
  const tecnologies = [
    {
      title: "Vue",
      image: "/public/images/tecnologies/vue.svg",
    },
    {
      title: "React",
      image: "/public/images/tecnologies/react.svg",
    },
    {
      title: "Sass",
      image: "/public/images/tecnologies/sass.svg",
    },
    {
      title: "Laravel",
      image: "/public/images/tecnologies/laravel.svg",
    },
    {
      title: "Next Js",
      image: "/public/images/tecnologies/next.svg",
    },
    {
      title: "Nuxt",
      image: "/public/images/tecnologies/nuxt.svg",
    },
    {
      title: "Styled Components",
      image: "/public/images/tecnologies/styled.svg",
    },
    {
      title: "Typescript",
      image: "/public/images/tecnologies/typescript.svg",
    },
    {
      title: "Docker",
      image: "/public/images/tecnologies/docker.svg",
    },
    {
      title: "Prime Vue",
      image: "/public/images/tecnologies/prime.svg",
    },
    {
      title: "Vitest",
      image: "/public/images/tecnologies/vitest.svg",
    },
    {
      title: "Node",
      image: "/public/images/tecnologies/node.svg",
    },

    {
      title: "Node",
      image: "/public/images/tecnologies/node.svg",
    },
    {
      title: "Vuetify",
      image: "/public/images/tecnologies/vuetify.svg",
    },
    {
      title: "Tailwind",
      image: "/public/images/tecnologies/tailwind.svg",
    },
    {
      title: "Nest",
      image: "/public/images/tecnologies/nest.svg",
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
              <Text>{tecnology.title}</Text>
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
