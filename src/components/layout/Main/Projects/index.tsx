import {
  IProjectSlide,
  ProjectSlider,
} from "@/components/partials/ProjectSlide";
import { Container } from "@/components/wrapper/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";

const slides = [
  {
    name: "Coffee Delivery",
    description: "Sua vida corrida pede aquele cafezinho.",
    primaryColor: "#fafafa",
    secondaryColor: "#EBC136",
    titleColor: "black",
    textColor: "gray.600",
    bagedBgActive: "#EBC136",
    bagedBg: "#E1E1E1",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/coffee_delivery/1.png"],
      ["/images/projects/coffee_delivery/2.png"],
      ["/images/projects/coffee_delivery/3.png"],
    ],
    emphasis: true,
  },

  {
    name: "Facebook",
    description: "Conecte com pessoas ao redor do mundo.",
    primaryColor: "#5681ff",
    secondaryColor: "#152330",
    titleColor: "white",
    textColor: "gray.200",
    bagedBg: "#4672F1",
    bagedBgActive: "#ffffff",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/facebook/1.png"],
      ["/images/projects/facebook/2.png"],
      ["/images/projects/facebook/3.png"],
    ],
  },

  {
    name: "Daily Diet",
    description: "Tudo que é preciso para você se manter no foco.",
    primaryColor: "#fafafa",
    secondaryColor: "#8DA677",
    titleColor: "black",
    textColor: "gray.600",
    bagedBgActive: "#8DA677",
    bagedBg: "#E1E1E1",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      [
        "/images/projects/daily_diet/1.png",
        "/images/projects/daily_diet/2.png",
      ],
      [
        "/images/projects/daily_diet/3.png",
        "/images/projects/daily_diet/4.png",
      ],
      [
        "/images/projects/daily_diet/5.png",
        "/images/projects/daily_diet/6.png",
      ],
    ],
  },

  {
    name: "Naped",
    description: "Sua principal fonte de informação no mundo nerd",
    primaryColor: "#6439C8",
    secondaryColor: "#5025B4",
    titleColor: "white",
    textColor: "white",
    bagedBgActive: "#FFFFFF",
    bagedBg: "#9B79EB",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/naped/1.png"],
      ["/images/projects/naped/2.png"],
      ["/images/projects/naped/3.png"],
    ],
  },

  {
    name: "Twitter",
    description: "Compartilhe e descubra o que está acontecendo em tempo real.",
    primaryColor: "#FAFAFA",
    secondaryColor: "#5681FF",
    titleColor: "black",
    textColor: "gray.600",
    bagedBg: "#E1E1E1",
    bagedBgActive: "#5681FF",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/twitter/1.png"],
      ["/images/projects/twitter/2.png"],
      ["/images/projects/twitter/3.png"],
    ],
  },

  {
    name: "Nft Shop",
    description: "Seu ambiente de compra de NFT.",
    primaryColor: "#502F97",
    secondaryColor: "#321479",
    titleColor: "white",
    textColor: "white",
    bagedBgActive: "#FFFFFF",
    bagedBg: "#7359AC",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/nft_shop/1.png"],
      ["/images/projects/nft_shop/2.png"],
      ["/images/projects/nft_shop/3.png"],
    ],
  },

  {
    name: "Frontend Quiz",
    description: "Teste seus conhecimentos de desenvolvimento frontend.",
    primaryColor: "#fafafa",
    secondaryColor: "#9C27B0",
    titleColor: "black",
    textColor: "gray.600",
    bagedBgActive: "#9C27B0",
    bagedBg: "#E1E1E1",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/frontend_quiz/1.png"],
      ["/images/projects/frontend_quiz/2.png"],
      ["/images/projects/frontend_quiz/3.png"],
    ],
  },

  {
    name: "Tic tac toe",
    description:
      "Desafie seus amigos e divirta-se com o clássico jogo de Tic Tac Toe.",
    primaryColor: "#31424B",
    secondaryColor: "#1A2A33",

    titleColor: "white",
    textColor: "gray.200",
    bagedBgActive: "#CED6E8",
    bagedBg: "#4B5D66",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/tic_tac_toe/1.png"],
      ["/images/projects/tic_tac_toe/2.png"],
      ["/images/projects/tic_tac_toe/3.png"],
    ],
  },

  {
    name: "God of War",
    description: "Mergulhe na épica jornada de Kratos em God of War.",
    primaryColor: "#071123",
    secondaryColor: "#000201",
    titleColor: "white",
    textColor: "gray.200",
    bagedBgActive: "#CED6E8",
    bagedBg: "#273652",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/god_of_war/1.png"],
      ["/images/projects/god_of_war/2.png"],
      ["/images/projects/god_of_war/3.png"],
    ],
  },

  {
    name: "GeekShop",
    description:
      "Encontre produtos incríveis de seus filmes, séries, jogos e animes favoritos..",
    primaryColor: "#2FBD6A",
    secondaryColor: "#1E9B52",
    titleColor: "white",
    textColor: "gray.100",
    bagedBgActive: "#fafafa",
    bagedBg: "#299857",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/images/projects/geekshop/1.png"],
      ["/images/projects/geekshop/2.png"],
      ["/images/projects/geekshop/3.png"],
    ],
  },
];

export function Projects() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });
  return (
    <Container>
      <Flex align={"center"} justify={"space-between"} mt={"10rem"}>
        <Text fontSize={"xx-large"} fontWeight={"bold"}>
          Projetos
        </Text>
        <Flex justify={"end"} gap={"1rem"}>
          <Button onClick={() => instanceRef.current?.prev()}>
            <ChevronLeftIcon />
          </Button>
          <Button onClick={() => instanceRef.current?.next()}>
            <ChevronRightIcon />
          </Button>
        </Flex>
      </Flex>

      <Box ref={sliderRef} className="keen-slider" mt={"3rem"}>
        {slides.map((slide, index) => (
          <Box key={"project" + index} className="keen-slider__slide">
            <ProjectSlider
              key={"slide-" + index}
              slide={slide as IProjectSlide}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
