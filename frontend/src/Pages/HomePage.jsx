import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/products";
import ProductCard from "../Components/ProductCard";

function HomePage() {
  const { products, fetchProduct } = useProductStore();
  useEffect(() => {
    fetchProduct();
  }, [])
  console.log(products);
  return (
    <Container maxWidth={"container.xl"} py={"12"}>
      <VStack spacing={"4"}>
        <Text 
        fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}

        >
          Product Store

        </Text>
        <Text >
          NO product found
          <Link to={"/createPage"}>
            <Text as={"span"}> Create Product</Text>
          </Link>
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          width={"full"}
          spacing={10}
        > {products.map((productElement) => {

          return <ProductCard id={productElement._id} product={productElement}></ProductCard>
        })}</SimpleGrid>

      </VStack>
    </Container>
  );
}

export default HomePage;
