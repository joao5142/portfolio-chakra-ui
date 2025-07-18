import { Box, Button, Flex, Image, Link, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { Container } from "../../wrapper/Container/index";
import { Experience } from "./Experience";
import { Tecnologies } from "./Tecnologies";
import { Projects } from "./Projects";
import { SystemDesigns } from "./SystemDesigns";

export function Main() {

  const { colorMode } = useColorMode()

  const textColor = useBreakpointValue({
    base: colorMode === 'dark' ? 'white' : 'transparent',
    md: colorMode === 'dark' ? 'inherit' : 'transparent',
  });
  
  const textBgColor = useBreakpointValue({
    base: colorMode === 'dark' ? 'white' : 'linear(to-r, black 50%, white)',
    md: colorMode === 'dark' ? 'white' : 'linear(to-r, black, black)',
  });
  
  return (
    <main>
      <section id="hero">
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
                bgGradient={  textBgColor  }
                bgClip="text"
                color= { textColor }
              >
                João Paulo
              </Text>
              
              <Text
                display={"block"}
                as={"span"}
                fontSize={"larger"}
                 bgGradient={ textBgColor }
                bgClip="text"     
                color={ textColor }       
                >
                Full Stack Developer
              </Text>

              <Link download href={"curriculo.pdf"} textDecoration={"none"}>
                <Button mt={"2rem"}>Baixar Currículo</Button>
              </Link>
            </Flex>
            <Box position={"relative"} marginRight={"20%"}>
              <Image
                src="/images/me.webp"
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
        </Box>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="tecnologies">
        <Tecnologies />
      </section>

       <section id="system-design">
        <SystemDesigns />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
