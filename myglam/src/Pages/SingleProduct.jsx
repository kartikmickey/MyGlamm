import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
  
  export default function SingleProduct() {
    const {id} = useParams()
    const [data, setData] = useState([
        {api_featured_image: "",
          brand: "",
          category: "",
          created_at:"",
          currency: "",
          description: "",
          id: "",
          image_link:"",
          name:  "",
          price:"",
          price_sign: "",
          product_api_url: "",
          product_colors: [
            {hex_value: '', colour_name: 'Fearless'}],
          product_link: "",
          product_type: "",
          rating: null,
          tag_list:"",
          updated_at: "",
          website_link: ""}]);
    // const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(()=>{
      
        axios.get(`https://grumpy-colt-hoodie.cyclic.app//posts?id=${id}`).then((res)=>setData(res.data))
       
    },[id])
         console.log(data);
        // console.log(loading)
        return (
         <Container maxW={'7xl'}>
           <Box h={{ base: '67px', md: '40px' }}></Box>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex  >
                  <Image
                    rounded={'md'}
                    alt={'product image'}
                    src={
                    data[0].api_featured_image
                    }
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    // pos="fixed"
                    h={{ base: '100%', sm: '400px', lg: '500px' }}
                  />
                </Flex>
                <Stack overflow={ { base: 'visible', md: 'scroll' }} h={{ base: '100%', sm: '460px', lg: '560px' }} spacing={{ base: 6, md: 10 }}>
                  <Box as={'header'}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                     {
                    data[0].name
                    }
                    </Heading>
                    <Text
                      color={('gray.900', 'gray.400')}
                      fontWeight={300}
                      fontSize={'2xl'}>
                      ₹{
                    Math.round(data[0].price * 45) || Math.round(Math.random()+1 *999)
                    }
                    </Text>
                  </Box>
        
                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={'column'}
                    divider={
                      <StackDivider
                        borderColor={('gray.200', 'gray.600')}
                      />
                    }>
                    <VStack spacing={{ base: 4, sm: 6 }}>
                      <Text
                        color={('gray.500', 'gray.400')}
                        fontSize={'2xl'}
                        fontWeight={'300'}
                        textTransform={'uppercase'}
                        align={"left"}
                        >
                        {
                    data[0].product_type
                    }
                      </Text>
                      <Text fontSize={'lg'}>
                      {
                    data[0].description
                    }    </Text>
                    </VStack>
                    <Box>
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={('yellow.500', 'yellow.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        Features
                      </Text>
        
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <List spacing={2} textTransform={'capitalize'} >
                        <ListItem>Smooth, opaque application</ListItem>
                        <ListItem>Vegan-friendly</ListItem>
                        <ListItem>Long-lasting, up to 12 hours</ListItem>
                        </List>
                        <List spacing={2} textTransform={'capitalize'} >
                          <ListItem>Matte finish</ListItem>
                          <ListItem>Smudge-proof and transfer-proof formula</ListItem>
                          <ListItem>Highly pigmented</ListItem>
                        </List>
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={('yellow.500', 'yellow.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        Product Details
                      </Text>
        
                      <List spacing={2}>
                        <ListItem textTransform={'capitalize'} >
                          <Text as={'span'} fontWeight={'bold'}>
                            Brand:
                          </Text>{' '}
                          {data[0].brand}
                        </ListItem>
                        <ListItem textTransform={'capitalize'} >
                          <Text as={'span'} fontWeight={'bold'}>
                            Category:
                          </Text>{' '}
                          {data[0].category}
                        </ListItem>
                        <ListItem textTransform={'capitalize'} >
                          <Text as={'span'} fontWeight={'bold'}>
                            Type:
                          </Text>{' '}
                          {data[0].product_type}
                        </ListItem>
                        <ListItem textTransform={'capitalize'} >
                          <Text as={'span'} fontWeight={'bold'}>
                          Color:
                          </Text>{' '}
                          {data[0]?.product_colors[0]?.colour_name || 'black'}
                        </ListItem>
                        <ListItem textTransform={'capitalize'} >
                          <Text as={'span'} fontWeight={'bold'}>
                            Rating:
                          </Text>{' '}
                          {data[0].rating || 3.4}
                        </ListItem>
                        <ListItem textTransform={'capitalize'} >
                          <Text as={'span'} fontWeight={'bold'}>
                            Water resistance
                          </Text>{' '}
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
        
                  <Button
                    rounded={'none'}
                    onClick={() => navigate(`/addtocart/${id}`)}
                    w={'full'}
                    mt={8}
                    size={'lg'}
                    py={'7'}
                    bg={('gray.900', 'gray.50')}
                    color={('white', 'gray.900')}
                    textTransform={'uppercase'}
                    _hover={{
                      transform: 'translateY(2px)',
                      boxShadow: 'lg',
                    }}>
                    Add to cart
                  </Button>
        
                  <Stack direction="row" alignItems="center" justifyContent={'center'}>
                    <MdLocalShipping />
                    <Text>2-3 business days delivery</Text>
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          );
  }