import { Text, Link } from "@chakra-ui/react";

export function Logo() {
  return (
    <Link
      href="/dashboard"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        michelribeiro
        <Text as="span" ml="1" color="pink.500">
          :.
        </Text>
      </Text>
    </Link>
  );
}
