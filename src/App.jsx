import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  position,
} from "@chakra-ui/react";

function App() {

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="25px"
        pb="8"
      >
        CADASTRO DE ALUNO
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh -150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 8px 8px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Cônjuge</FormLabel>
                <Input id="natural" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="fonefixo">Telefone Fixo</FormLabel>
                <Input id="fonefixo" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="fonezap">Número do WhatsApp</FormLabel>
                <Input id="fonezap" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
            <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="20%">
                <FormLabel htmlFor="uf">UF</FormLabel>
                <Input id="uf" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="complemento">Complemento</FormLabel>
                <Input id="complemento" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nomepai">Nome do Pai</FormLabel>
                <Input id="nomepai" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nomemae">Nome da Mãe</FormLabel>
                <Input id="nomemae" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="classe">Classe</FormLabel>
                <Input id="classe" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="datadamatricula">Data da Matrícula</FormLabel>
                <Input id="datadamatricula" type="date" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
              w={240}
              p="6"
              type="submit"
              bg="teal.600"
              color="white"
              fontWeight="bod"
              fontSize="x1"
              mt="2"
              _hover={{bg:"teal.800"}}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default App
