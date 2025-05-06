import { Button, Container, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/products';
import { useToast } from '@chakra-ui/react'

export default function CreatePage() {
  const toast = useToast()
  const [product, setProduct] = useState({
    name : "",
    price : "",
    image : ""
  });
  const {createProduct} = useProductStore();
  const handleClick = async ()=>{
    const res = await createProduct(product);
    if(res.success ==='true'){
      toast({
        title: 'Success',
        description: "Product Created.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Error',
        description: "Product not Created.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }
  return (
    <Container maxWidth={"container.sm"}>
      <VStack spacing={'8'}>
        <Text>Create Page</Text>
        <Input placeholder='Name' onChange={(e)=>{setProduct({...product, name : e.target.value})}}></Input>
        <Input placeholder='Price' onChange={(e)=>{setProduct({...product, price : e.target.value})}}></Input>
        <Input placeholder='Image' onChange={(e)=>{setProduct({...product, image : e.target.value})}}></Input>
        <Button onClick={handleClick}>Submit</Button>
      </VStack>
    </Container>
  )
}
