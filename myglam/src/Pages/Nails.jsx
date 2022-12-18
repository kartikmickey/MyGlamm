import { Heading, Divider,Box, Grid,Button, Card, CardHeader,Text, ButtonGroup, CardBody,Image,Stack, CardFooter } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Nails = ()=>{
    const [page, setPage] = useState(1);
    let navigate = useNavigate();
    const [total, setTotal] = useState(1)
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`https://grumpy-colt-hoodie.cyclic.app//posts?_page=${page}&_limit=100&product_type=nail_polish`).then((res)=>{return(setData(res.data),
     setTotal(res.headers["x-total-count"]))}
        );
    },[page]);
    console.log(total, data)

    return(
        <>
        <Box h={{ base: '67px', md: '98px' }}>

</Box>
        <Heading margin={"auto"} mt={10} textAlign={'center'} textDecoration={'underline'} >NAIL POLISH SETS</Heading>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}  gap={6} margin={10} >
      {data?.map((e)=>(
          <Card key={e.id} 
     
          maxW='sm'>
          <CardBody
            onClick={() => navigate(`/product/${e.id}`)}
          >
            <Image
              src= {e.api_featured_image
              }
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{e.name}</Heading>
              <Text noOfLines={[2, 3, 6]} >
                {e.description}
  </Text>
              <Text color='yellow.600' fontSize='2xl'>
              ₹{Math.round(e.price*45) || Math.round((Math.random()+1)*999 ) }
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' 
              onClick={() => navigate(`/addtocart/${e.id}`)}
              colorScheme='pink'>
                Buy now
              </Button>
              <Button variant='ghost'
              onClick={() => navigate(`/addtocart/${e.id}`)} colorScheme='yellow'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
</Grid>
<Stack w={"30%"} margin={"auto"} mb={5} spacing={0.5} direction='row' align='center' justifyContent={"space-evenly"} >
<Button disabled={page <=1} onClick={()=>setPage(page-1)} colorScheme='gray' size='md'>
    Prev
  </Button>
  <Button ml={0} mr={0} disabled colorScheme='pink' size='md'>
   {page}
  </Button>
  <Button disabled={page >=Math.ceil(total/100)} onClick={()=>setPage(page+1)} colorScheme='gray' size='md'>
    Next
  </Button>
 
</Stack>

        </>
    )
}

export default Nails;