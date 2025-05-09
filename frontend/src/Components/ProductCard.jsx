import { Box, Button, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  const {product} = props
  return (
    <Box>
      <Image src={product.Image} alt={product.name} height={"48"} width={'full'} fit={'cover'}></Image>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <HStack spacing={'2'}>
         <IconButton>
          <Link to={"/edit"}>Edit</Link>
         </IconButton>
         <IconButton to={"/delete"}>Delete</IconButton>
      </HStack>

    </Box>
  )
}
