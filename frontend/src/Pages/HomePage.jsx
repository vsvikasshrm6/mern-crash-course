import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/products";
import ProductCard from "../Components/ProductCard";

function HomePage() {
  const {product} = useProductStore();
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
          > {product.map((productElement)=>{
             return <ProductCard id = {productElement.id} product = {productElement}></ProductCard> 
          })}</SimpleGrid>

      </VStack>
    </Container>
  );
}

export default HomePage;
