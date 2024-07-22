import { Box } from "@chakra-ui/react";

interface IProps extends React.PropsWithChildren {}
export function Container({ children }: IProps) {
  return (
    <Box maxW={"1300"} mx={"auto"}>
      {children}
    </Box>
  );
}
