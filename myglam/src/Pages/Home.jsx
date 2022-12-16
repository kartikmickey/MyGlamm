import { Center, Image, Stack,
    Box,
    useColorModeValue,
    Heading,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3004/posts?_page=1&_limit=4`).then((res)=>setData(res.data));
    },[])
console.log(data);
    const div1= {
        backgroundColor:"#f4f4f4",
      
    }

    return (
        <>
        <img src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279.gif" />
        <div style={div1}>
        <br  />
        <img src="https://files.myglamm.com/site-images/original/Homepage-desktop-1920x527.png"/>
        </div>
        <div style={div1} >
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{width: "100%"}} src="https://files.myglamm.com/site-images/original/Sectional-Headers-2_3.jpg" />
            <br/>
            <br/>
            <br/>
            <br/>
            <Center direction={{ base:'column' , md: 'row' }} margin={"auto"} width={{ base: '100%', md: '80%' }} >
  <Image boxSize={{ base: '23.5%', md: '23%' }} margin={"auto"} src='https://files.myglamm.com/site-images/original/16-700x488.jpg' alt='Dan Abramov' />
  <Image boxSize={{ base: '23.5%', md: '23%' }} margin={"auto"} src='https://files.myglamm.com/site-images/original/17--700x488.jpg' alt='Dan Abramov' />
  <Image boxSize={{ base: '23.5%', md: '23%' }} margin={"auto"} src='https://files.myglamm.com/site-images/original/18-700x488.jpg' alt='Dan Abramov' />
  <Image boxSize={{ base: '23.5%', md: '23%' }} margin={"auto"} src='https://files.myglamm.com/site-images/original/19-700x488.jpg' alt='Dan Abramov' />
  </Center>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{width: "100%"}} src="https://files.myglamm.com/site-images/original/bestsellers_6.jpg" />
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div style={div1}>
        <Center py={12} width={"80%"} margin={"auto"}  >
     {
        data?.map((e)=>(
          
            <Box
            key={e.id}
            role={'group'}
            p={6}
            onClick={() => navigate(`/product/${e.id}`)}
            margin={"auto"}
            maxW={'330px'}
            w={'full'}
            gap={6}
            bg={('white')} 
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            width={"23%"} >
            <Box
              rounded={'lg'}
              mt={0}
              pos={'relative'}
              height={'230px'}

              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
               
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={e.api_featured_image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
           
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {e.name}
              </Heading>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {e.category} 
              </Text>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                ₹{Math.round(e.price * 45) }
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                ₹{Math.round(e.price * 55)}
                </Text>
              </Stack>
            </Stack>
          </Box>
        //   </Link>
        ))
     }
      
    </Center>
        </div>
        </>
    )
}

export default Home;