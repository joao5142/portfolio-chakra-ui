import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function toggleVisibility() {
    const heroElement = document.getElementById("hero");
    if (window.scrollY > heroElement!.clientHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right={["16px", "84px"]}
          zIndex={3}
        >
          <Button
            size={"sm"}
            rightIcon={<ArrowUpIcon />}
            bg={"primary"}
            color={"white"}
            _hover={{}}
          >
            Scroll To Top
          </Button>
        </Box>
      )}
    </>
  );
}
