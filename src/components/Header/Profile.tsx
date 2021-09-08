import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text fontSize="small"> Michel Ribeiro</Text>
          <Text color="gray.300" fontSize="small">
            michel.ribeiro@michelribeiro.com.br
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Michel Ribeiro"
        src="https://github.com/michelribeiro.png"
      />
    </Flex>
  );
}
