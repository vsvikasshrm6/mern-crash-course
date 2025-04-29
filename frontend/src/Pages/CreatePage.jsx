import {
  Box,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <Container>
      <VStack spacing={8} alignItems={"center"}>
        <Heading>Create Product</Heading>
        <Box>
          <Input
            placeholder="Name"
            onChange={(e) => {
              setNewProduct(e.target.value);
            }}
          >
            {newProduct.name}
          </Input>
          <Input
            placeholder="Price"
            onChange={(e) => {
              setNewProduct(e.target.value);
            }}
          >
            {newProduct.name}
          </Input>
          <Input
            placeholder="Image"
            onChange={(e) => {
              setNewProduct(e.target.value);
            }}
          >
            {newProduct.name}
          </Input>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;
