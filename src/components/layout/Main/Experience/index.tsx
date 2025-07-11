import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Container } from "@/components/wrapper/Container/index";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export function Experience() {
  const experiences = [
    {
      title: "Coopanestrio",
      year: "2024",
      habilities: [
        "Desenvolvimento de aplicações web com Fastify e Prisma",
        "Implantação de soluções utilizando AWS (SNS, SQS, Lambda, S3, etc.)",
        "Implementação de padronização de commits com Husky, Commitlint e Commitizen",
        "Containerização e deploy de aplicações em produção com Docker",
        "Automação de deploy com GitHub Actions",
        "Consumo de API’s em GraphQL",
        "Desenvolvimento com PHP",
        "Criação de aplicações com Nuxt 3",
        "Estilização responsiva com Tailwind CSS",
        "Gerenciamento de estado com Pinia",
        "Uso de componentes com Nuxt UI",
        "Programação com TypeScript",
        "Desenvolvimento de Progressive Web Apps (PWAs)",
        "Criação de arquiteturas baseadas em microserviços",
        "Implementação de logs com sentry"
      ],
    },
    {
      title: "Fone Ninja",
      year: "2024",
      habilities: [
        "Construção de Design Systems",
        "Implementação de serviços baseado em eventos",
        "Utilização de Web Workers e Service Workers",
        "Automação de testes end-to-end com Cypress",
        "Desenvolvimento de aplicações web com Laravel",
        "Implementação de filas assíncronas com Redis",
        "Criação de aplicações com Nuxt 3",
        "Estilização responsiva com Tailwind CSS",
        "Gerenciamento de estado com Pinia",
        "Desenvolvimento de interfaces com PrimeVue",
        "Programação com TypeScript",
        "Desenvolvimento de Progressive Web Apps (PWA)",
        "Testes automatizados com Vitest",
        "Implementação de logs com sentry"
      ],
    },
    {
      title: "Youshop",
      year: "2024",
      habilities: [
        "Desenvolvimento de aplicações web com Nuxt 2",
        "Desenvolvimento de interfaces com Vue 2",
        "Criação de componentes com Vuetify",
        "Gerenciamento de estado com Vuex",
        "Estilização com Sass",
        "Programação com TypeScript"
      ],
    },
    {
      title: "Treinutri",
      year: "2023",
      habilities: [
        "Integração com gateway de pagamento (Asaas)",
        "Automação de deploy com GitHub Actions via FTP",
        "Desenvolvimento de aplicações web com Laravel",
        "Implementação de push notification com OneSignal",
        "Criação de aplicações com Nuxt",
        "Desenvolvimento de interfaces com Vuetify",
        "Desenvolvimento de interfaces com PrimeVue",
        "Gerenciamento de estado com Pinia",
        "Programação com TypeScript",
        "Desenvolvimento de Progressive Web Apps (PWA)",
        "Gerenciamento de hospedagem com HostGator",
        "Implementação de filas assíncronas com Laravel",
        "Implementação de logs com sentry"
      ],
    },
    {
      title: "Mvc Editora",
      year: "2022",
      habilities: [
        "Desenvolvimento de aplicações web com Laravel",
        "Desenvolvimento de interfaces com Vue 2 e Vue 3",
        "Implementação de padronização de commits com Husky, Commitlint e Commitizen",
        "Criação de aplicações com Nuxt 3",
        "Criação de interfaces com Vuetify",
        "Estilização avançada com Sass",
        "Gerenciamento de estado com Pinia",
        "Programação com TypeScript",
        "Testes unitários com Vitest",
        "Desenvolvimento de UI Kits e documentação com Storybook",
      ],
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });
  return (
    <Container>
      <Text fontSize={"xx-large"} fontWeight={"bold"} mt={"10rem"}>
        Experiências
      </Text>

      <Box ref={sliderRef} className="keen-slider" mt={"3rem"}>
        {experiences.map((experience, index) => (
          <Box key={"experience" + index} className="keen-slider__slide">
            <Flex align={"center"} justify={"space-between"}>
              <Text fontSize={"large"} fontWeight={"medium"}>
                {experience.title}
              </Text>
              <Text fontSize={"x-small"}>{experience.year}</Text>
            </Flex>

            <Box mt={"2rem"}>
              <UnorderedList pl={2}>
                {experience.habilities.map((hability, index) => (
                  <ListItem mb={3} key={"hability" + index}>
                    {hability}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        ))}
      </Box>

      <Flex justify={"end"} gap={"1rem"}>
        <Button onClick={() => instanceRef.current?.prev()}>
          <ChevronLeftIcon />
        </Button>
        <Button onClick={() => instanceRef.current?.next()}>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Container>
  );
}
