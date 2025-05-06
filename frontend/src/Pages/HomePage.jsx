import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container maxWidth={"container.lg"} py={"8"}>
      <VStack spacing={"4"}>
        <Text >
          Product Store
          
        </Text>
        <Text >
            NO product found
            <Link to={"/createPage"}>
              <Text as={"span"}> Create Product</Text>
            </Link>
          </Text>
          <SimpleGrid
          column={3}
          > </SimpleGrid>

      </VStack>
    </Container>
  );
}

export default HomePage;
