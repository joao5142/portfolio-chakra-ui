import { Container } from "@/components/wrapper/Container";
import { EmailService } from "@/services/EmailService";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";

export function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    console.log("entrou");
    setIsRequestLoading(true);
    try {
      await EmailService.sendEmail(form.current as HTMLFormElement);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRequestLoading(false);
    }
  }

  return (
    <Box as="footer" py={"2rem"} bg={"primary"}>
      <Container>
        <Text
          fontSize={"x-large"}
          textAlign={"center"}
          fontWeight={"medium"}
          color={"white"}
        >
          Entre em contato
        </Text>

        <form ref={form} onSubmit={sendEmail} id="email-form" method="POST">
          <Flex direction={"column"} gap={"2rem"} mt={"10rem"}>
            <Input
              name="user_email"
              bg={"secondary"}
              borderColor={"transparent"}
              color={"white"}
              maxW={"500"}
              _placeholder={{ color: "whiteAlpha.500" }}
              placeholder="Informe seu email"
            ></Input>

            <Textarea
              bg={"secondary"}
              borderColor={"transparent"}
              color={"white"}
              maxW={"500"}
              placeholder="Digite aqui a mensagem que você deseja enviar"
              _placeholder={{ color: "whiteAlpha.500" }}
              rows={5}
              name="message"
            />

            <Button
              form="email-form"
              maxW={"200"}
              type="submit"
              isLoading={isRequestLoading}
            >
              Enviar
            </Button>
          </Flex>
        </form>

        <Flex direction={"column"} align={"center"} gap={"2rem"} mt={"10rem"}>
          <Link
            color={"white"}
            fontSize={{ base: "medium", md: "large" }}
            href="mailto:joaopauloneto3687@gmail.com"
            wordBreak={"break-all"}
            textAlign={"center"}
            target={"_blank"}
          >
            joaopauloneto3687@gmail.com
          </Link>
          <Flex gap={"1rem"}>
            <Link
              href="https://www.linkedin.com/in/joaopaulof/"
              target={"_blank"}
            >
              <Image src="/linkedin.svg" />
            </Link>
            <Link href="mailto:joaopauloneto3687@gmail.com" target={"_blank"}>
              <Image src="/mail.svg" />
            </Link>
            <Link
              href="https://www.instagram.com/joao_paul.2000/"
              target={"_blank"}
            >
              <Image src="/insta.svg" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
