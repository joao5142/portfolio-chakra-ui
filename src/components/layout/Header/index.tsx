import { Flex, Link, List, ListItem } from "@chakra-ui/react";
import { Container } from "../../wrapper/Container";

export function Header() {
  return (
    <header>
      <Container>
        <Flex justify={"space-between"} py={"3rem"}>
          <Link fontSize={"larger"} href="">
            Portfolio
          </Link>
          <List
            display={{ base: "none", md: "none", lg: "flex" }}
            gap={"2rem"}
            color={"white"}
          >
            <ListItem cursor={"pointer"}>Home</ListItem>
            <ListItem cursor={"pointer"}>Experiencia</ListItem>
            <ListItem cursor={"pointer"}>Projetos</ListItem>
            <ListItem cursor={"pointer"}>Contato</ListItem>
          </List>
        </Flex>
      </Container>
    </header>
  );
}
