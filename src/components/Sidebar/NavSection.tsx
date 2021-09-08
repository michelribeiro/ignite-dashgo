import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TitleProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: TitleProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="strech">
        {children}
      </Stack>
    </Box>
  );
}
