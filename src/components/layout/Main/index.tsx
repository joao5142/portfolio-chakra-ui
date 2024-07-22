import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Container } from "../../wrapper/Container/index";
import { Experience } from "./Experience";
import { Tecnologies } from "./Tecnologies";
import { Projects } from "./Projects";

export function Main() {
  return (
    <main>
      <section>
        <Container>
          <Flex
            mt={"-8rem"}
            w={"100%"}
            h={"100vh"}
            justify={{ base: "center", md: "space-between" }}
            gap={"3rem"}
            align={{ base: "center", md: "center" }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex direction={"column"} align={{ base: "center", md: "start" }}>
              <Text
                as={"strong"}
                fontSize={"xxx-large"}
                bgGradient={{
                  base: "linear(to-r, black 50%, white)",
                  md: "linear(to-r,black,black)",
                }}
                bgClip="text"
              >
                João Paulo
              </Text>

              <Text
                display={"block"}
                as={"span"}
                fontSize={"larger"}
                bgGradient={{
                  base: "linear(to-r, black 50%, white)",
                  md: "linear(to-r,black,black)",
                }}
                bgClip="text"
              >
                Full Stack Developer
              </Text>

              <Link download href={"curriculo.pdf"} textDecoration={"none"}>
                <Button mt={"2rem"}>Baixar Currículo</Button>
              </Link>
            </Flex>
            <Box position={"relative"} marginRight={"20%"}>
              <Image
                src="/public/images/me.jfif"
                alt=""
                w={"400px"}
                zIndex={2}
                position={"relative"}
              />
              <Box
                maxW={"400px"}
                maxH={"400px"}
                width={"100%"}
                height={"100%"}
                position={"absolute"}
                right={-45}
                top={45}
                bg={"white"}
                zIndex={1}
              />
            </Box>
          </Flex>
        </Container>

        <Box
          h={"100vh"}
          w={"40%"}
          zIndex={-1}
          bg={"primary"}
          position={"absolute"}
          top={0}
          right={0}
        >
          2
        </Box>
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <Tecnologies />
      </section>

      <section>
        <Projects />
      </section>
    </main>
  );
}
