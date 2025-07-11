import { Container } from "@/components/wrapper/Container";
import { Box, Text } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";

export function SystemDesigns() {
  const [sliderRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });

  const systemDesigns = [
     {
      title: "Projeto 1",
      image: "/images/system-design/1.png",
    },
    {
      title: "Projeto 2",
      image: "/images/system-design/2.png",
    },
    {
      title: "Projeto 2",
      image: "/images/system-design/3.png",
    },
  ];

  return (
    <Container>
      <Text fontSize={"xx-large"} fontWeight={"bold"} mt={"10rem"}>
        System Design / Fluxo de Processo
      </Text>

    <Box ref={sliderRef} className="keen-slider" mt={"3rem"} mb={"5rem"}>
        {systemDesigns.map((slide, index) => (
          <Box key={"project" + index} className="keen-slider__slide">
            <img src={slide.image}/>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
