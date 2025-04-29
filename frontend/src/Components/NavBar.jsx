import { Button, Center, Container, Flex, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <Container maxWidth={"1140px"}>
      <Flex
        direction={"row"}
        textAlign={Center}
        justifyContent={"space-between"}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Chakra UI
        </Text>
        <HStack>
          <Button>
            <CiSquarePlus />
          </Button>
          <Button onClick={useColorMode}>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;
