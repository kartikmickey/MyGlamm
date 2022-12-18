import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Card,
    CardBody,
    CardFooter,
    Button,  
    Heading,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialog,
    useDisclosure,
  } from '@chakra-ui/react';
  import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Modalbutton from './Modal';
  
  export default function Addtocart() {
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
          const { isOpen, onOpen, onClose } = useDisclosure()
          const cancelRef = React.useRef();
          const [qty, setQty] = useState(1);
          let navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    useEffect(()=>{
      
        axios.get(`https://grumpy-colt-hoodie.cyclic.app//posts?id=${id}`).then((res)=>setData(res.data))
       
    },[id])
         console.log(data);
        // console.log(loading)
        return (
         <>
             <Box h={{ base: '67px', md: '99px' }}></Box>
           <Card
           m={100}
           mt={10}
           mb={10}
           direction={{ base: 'column', sm: 'row' }}
           overflow='hidden'
           variant='outline'
         >
           <Image
             objectFit='cover'
             maxW={{ base: '100%', sm: '200px' }}
             src={
                data[0].api_featured_image
                }
             alt='Caffe Latte'
           />
         
           <Stack>
             <CardBody>
               <Heading size='xl'>  {
                    data[0].name
                    }</Heading>
         
               <Text py='2' fontSize='xl' textTransform={'capitalize'} >
                 {data[0].product_type}
                
               </Text>
               <Text color='yellow.600' fontSize='2xl'>
               ₹{
                    Math.round(data[0].price * 45) || Math.round(Math.random()+1 *999)
                    }
      </Text>
             </CardBody>
             <CardFooter>
                <Text mt={1} color='gray.600' size='sm' >QTY.</Text>
                <Button disabled={qty==1}
                onClick={()=>setQty(qty-1)}
                size='sm' ml={2} colorScheme='gray' variant='solid'>
    -
  </Button>
  <Button size='sm' ml={2} colorScheme='gray' variant='outline'>
    {qty}
  </Button>
  <Button
  onClick={()=>setQty(qty+1)}
  disabled={qty==10} ml={2} size='sm' colorScheme='gray' variant='solid'>
    +
  </Button>
             </CardFooter>
             <CardFooter>
               <Modalbutton/>
               <Button ml={2} colorScheme='red' onClick={onOpen}>
        Remove
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
             Remove Product 
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => navigate(`/`)} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
             </CardFooter>
           </Stack>
         </Card>

<Container textAlign={"center"} mb={10}  >
    <Text as={"b"} color='yellow.600' fontSize='2xl'  >
        Total Cost :  ₹{
                    Math.round(data[0].price * 45)*qty || Math.round(Math.random()+1 *999)*qty
                    }
    </Text>
</Container>

         </>
          );
  }