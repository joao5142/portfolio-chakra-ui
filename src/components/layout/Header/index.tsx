import { Flex, Link, List, ListItem } from "@chakra-ui/react";
import { Container } from "../../wrapper/Container";

export function Header() {
  return (
    <header>
      <Container>
        <Flex justify={"space-between"} py={"3rem"}>
          <Link fontSize={"larger"} href="">
            Portfólio
          </Link>
          <List
            display={{ base: "none", md: "none", lg: "flex" }}
            gap={"2rem"}
            color={"white"}
          >
            <Link href="#experience" color={"gray"}>
              <ListItem cursor={"pointer"}>Experiências</ListItem>
            </Link>
            <Link href="#tecnologies">
              <ListItem cursor={"pointer"}>Tecnologias</ListItem>
            </Link>

             <Link href="#system-design">
              <ListItem cursor={"pointer"}>System Design</ListItem>
            </Link>

            <Link href="#projects">
              <ListItem cursor={"pointer"}>Projetos</ListItem>
            </Link>
            <Link href="#contact">
              <ListItem cursor={"pointer"}>Contato</ListItem>
            </Link>
          </List>
        </Flex>
      </Container>
    </header>
  );
}
