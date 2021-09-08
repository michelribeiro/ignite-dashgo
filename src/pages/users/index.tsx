import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json)
      .then((data) => console.log(data));
  }, []);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                {isWideVersion && `Criar novo`}
              </Button>
            </Link>
          </Flex>
          <Box w={["302px", "100%"]} display="block" overflowX="auto">
            <Table colorScheme="whiteAlpha" w="100%">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  <Th>Data de cadastro</Th>
                  <Th>&nbsp;</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontSize={["xs", "sm"]} fontWeight="bold">
                        Michel Ribeiro
                      </Text>
                      <Text fontSize={["xs", "sm"]}>
                        Michel.Ribeiro@michelribeiro.com.br
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Text fontSize={["xs", "sm"]}>04 de Abril,2021</Text>
                  </Td>
                  <Td width={2}>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      {isWideVersion && `Criar novo`}
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
