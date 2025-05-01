import { Button, Container, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function CreatePage() {
  const [product, setProduct] = useState({
    name : "",
    price : "",
    image : ""
  });
  return (
    <Container maxWidth={"container.sm"}>
      <VStack spacing={'8'}>
        <Text>Create Page</Text>
        <Input placeholder='Name' onChange={(e)=>{setProduct({...product, name : e.target.value})}}></Input>
        <Input placeholder='Price' onChange={(e)=>{setProduct({...product, price : e.target.value})}}></Input>
        <Input placeholder='Image' onChange={(e)=>{setProduct({...product, image : e.target.value})}}></Input>
        <Button onClick={()=>{console.log(product)}}>Submit</Button>
      </VStack>
    </Container>
  )
}
