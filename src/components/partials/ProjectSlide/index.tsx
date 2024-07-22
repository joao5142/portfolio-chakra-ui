import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronRightIcon, WarningIcon } from "@chakra-ui/icons";

export interface IProjectSlide {
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  imageWidth: number;
  imageHeight: number;
  images: Array<Array<string>>;
  textColor?: string;
  titleColor?: string;
  bagedBg?: string;
  bagedBgActive?: string;
  emphasis?: boolean;
}

interface ProjectSlideProps {
  slide: IProjectSlide;
}

export function ProjectSlider({ slide }: ProjectSlideProps) {
  const [selectedSlide, setSelectedSlide] = useState(0);

  function handleGoNextSlide() {
    if (selectedSlide >= slide.images.length - 1) {
      setSelectedSlide(0);
    } else {
      setSelectedSlide((prevState: number) => prevState + 1);
    }
  }

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 2fr" }}
      borderRadius={"1rem"}
      mb={"5rem"}
      maxH={"575px"}
      h={"100%"}
    >
      <Flex
        bg={slide.primaryColor}
        padding={{ base: "1rem", md: "4rem" }}
        borderTopLeftRadius={"inherit"}
        borderBottomLeftRadius={{ md: "inherit" }}
        borderTopRightRadius={{ base: "inherit", md: "unset" }}
        align={"end"}
      >
        <div>
          {slide.emphasis && (
            <Flex
              borderRadius={"0.75rem"}
              borderColor={"orange.200"}
              borderWidth={"1px"}
              background={"gray.100"}
              padding={"0.625rem 1.25rem"}
              align={"center"}
              gap={"0.6rem"}
              mb={"2rem"}
              bg={"orange.50"}
              justify={"center"}
              py={"0.9rem"}
            >
              <Text color="orange.400" fontWeight={"bold"} as="strong">
                Case destaque
              </Text>
              <WarningIcon color="#ED8936" />
            </Flex>
          )}
          <Box mb={"2rem"}>
            <Text
              as="strong"
              fontSize="xx-large"
              fontWeight={"bold"}
              color={slide.titleColor ? slide.titleColor : "white"}
            >
              {slide.name}
            </Text>
          </Box>
          <Box mb={30}>
            <Text
              as="strong"
              fontWeight={"400"}
              color={slide.textColor ? slide.textColor : "white"}
            >
              {slide.description}
            </Text>
          </Box>
          <Flex gap={"0.5rem"}>
            <Box
              w={selectedSlide === 0 ? "40px" : "20px"}
              h={"6px"}
              borderRadius={"4px"}
              bg={selectedSlide === 0 ? slide.bagedBgActive : slide.bagedBg}
              onClick={() => setSelectedSlide(0)}
              cursor={"pointer"}
            />
            <Box
              w={selectedSlide === 1 ? "40px" : "20px"}
              borderRadius={"4px"}
              bg={selectedSlide === 1 ? slide.bagedBgActive : slide.bagedBg}
              onClick={() => setSelectedSlide(1)}
              cursor={"pointer"}
            />
            <Box
              w={selectedSlide === 2 ? "40px" : "20px"}
              borderRadius={"4px"}
              bg={selectedSlide === 2 ? slide.bagedBgActive : slide.bagedBg}
              onClick={() => setSelectedSlide(2)}
              cursor={"pointer"}
            />
          </Flex>
          <Box marginTop={30}>
            <Button onClick={handleGoNextSlide}>
              <ChevronRightIcon fontSize={"1.5rem"} />
            </Button>
          </Box>
        </div>
      </Flex>

      <Flex
        justify={"center"}
        align={"center"}
        gap={"3.5rem"}
        bg={slide.secondaryColor}
        borderBottomRightRadius={{ base: "1rem", md: "1rem" }}
        borderBottomLeftRadius={{ base: "1rem", md: "unset" }}
        borderTopRightRadius={{ base: "unset", md: "1rem" }}
        p={"2rem"}
      >
        {slide.images[selectedSlide].map((imageUrl, index) => (
          <Box key={"slide-image" + index}>
            <Image
              maxH={"480px"}
              key={slide.name + "image" + index}
              src={imageUrl}
              alt=""
            />
          </Box>
        ))}
      </Flex>
    </Grid>
  );
}
