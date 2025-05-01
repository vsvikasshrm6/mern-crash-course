import { Box, Button, Container, Flex, HStack, Text, useColorMode} from "@chakra-ui/react";
import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <Container maxWidth={"container.sm"} py={"8"} >
      <Flex justifyContent={"space-between"}>
        <Text
         bgGradient='linear(to-l, #7928CA, #FF0080)'
         bgClip='text'
         fontSize='xl'
         fontWeight='extrabold'
        >Product Store</Text>
        <HStack spacing={'0.5'} >
          <Button>
            <Link to={"/createPage"}><FaPlusSquare /></Link>
            </Button>
            <Button onClick={toggleColorMode}>
            {colorMode ==="light" ? <LuMoon/> :<LuSun/>}
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
