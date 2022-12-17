import { Center, Image, Stack,
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get(`https://grumpy-colt-hoodie.cyclic.app//posts?_page=1&_limit=4`).then((res)=>setData(res.data));
    },[])
console.log(data);
    const div1= {
        backgroundColor:"#f4f4f4",
      
    }

    return (
        <>
        <Box h={{ base: '67px', md: '98px' }}>

        </Box>
        <img  src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279.gif" />
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
    <br/>
    <img style={{width: "100%"}} src='https://files.myglamm.com/site-images/original/Sectional-Headers-1_5.jpg'/>
    <br/>
    <br/>
    <br/>
    <img style={{width: "100%"}} src='https://files.myglamm.com/site-images/original/spn3360x279_1.jpg'/>
    <br/>
    <br/>
    <br/>
        </div>
        <div style={div1} >
        <Center direction={{ base:'column' , md: 'row' }} margin={"auto"} width={{ base: '98%', md: '80%' }} >
  <Image boxSize={{ base: '30%', md: '35%' }}  margin={"auto"} ml={0} src='https://files.myglamm.com/site-images/original/TGLF-December-Slot-Machine-1-1_2.png' alt='Dan Abramov' />
  <Image boxSize={{ base: '30%', md: '35%' }}  margin={"auto"} mr={0} src='https://files.myglamm.com/site-images/original/TGLF-December-Slot-Machine-2-1_1.jpg' alt='Dan Abramov' />
  </Center>
   <br/>
    <br/>
    <img style={{width:'80%' ,
    margin:"auto"
  }} src='https://files.myglamm.com/site-images/original/SS-sleek-Desktop-2240-x-614.png'/>
  <br/>
  <img style={{width: "100%"}} src='https://files.myglamm.com/site-images/original/curated-collections.jpg'/>
  <br/>
  <br/>
  <br/>
    <br/>
  <Center direction={{ base:'column' , md: 'row' }} margin={"auto"} width={{ base: '98%', md: '80%' }} >
  <Image boxSize={{ base: '30%', md: '35%' }}  margin={"auto"} ml={0} src='https://files.myglamm.com/site-images/original/cu700x488.png' alt='Dan Abramov' />
  <Image boxSize={{ base: '30%', md: '35%' }}  margin={"auto"} mr={0} src='https://files.myglamm.com/site-images/original/700x488_12.png' alt='Dan Abramov' />
  </Center>
  <br/>
    <br/>
        </div>
        <img style={{width: "100%"}} src=" https://files.myglamm.com/site-images/original/CRED-Pay-3360x279_9.png" />
       <div style={div1}>
       <br/>
            <br/>
            <br/>
            <img style={{width: "100%"}} src="https://files.myglamm.com/site-images/original/Watch-Love-Shop-.jpg" />
            <br/>
            <br/>
            <br/>
            <div style={{display:"flex",
       backgroundColor:"#f4f4f4",
       width:"80%",
       margin: "auto",
       justifyContent: "space-between"
      
      }} >
        <p
        style={{color:"#333333",
        fontFamily:["din-2014", "sans-serif"],
        backgroundColor:"#f4f4f4",
        fontSize:"19.7px",
        lineHeight:"29.55px",
        fontWeight: 400
       
       }}
        >
Show your look
        </p>
        <p
        style={{color:"#333333",
        fontFamily:["din-2014", "sans-serif"],
        backgroundColor:"#f4f4f4",
        fontSize:"13.1px",
        lineHeight:"19.65px",
        fontWeight: 400,
        width:"27%",
        textAlign: "center"
       
       }}
        >
Upload your favorite makeup
 looks on instagtam with<br/><span style={{
  color:"#FF9797",
}}>
#myglamm
</span> for a chance to featured!
        </p>
        <p
        style={{color:"#333333",
        fontFamily:["din-2014", "sans-serif"],
        backgroundColor:"#f4f4f4",
        fontSize:"13.1px",
        lineHeight:"19.65px",
        fontWeight: 400,
        textAlign: "right",
       
       }}
        >
Follow us on Instagtam
<br/>
<span style={{
  color:"#FF9797",
}}>
#myglamm
</span>
        </p>
       </div>
       <br/>
       <div style={{
        width:"80%",
        backgroundColor:"#f4f4f4",
        margin: "auto",
        display: "flex",
        marginBottom: "10px",
        // height: "200px",
        // border: "1px solid black",
       }}>
        <div style={{
        width:"16%",
        height: "200px",
        margin:"auto",
        // border: "1px solid black",
       }}>
          <img style={{
        width:"100%",
        height: "100%",
       }} src="https://m.photoslurp.com/vt720/pslurpmedia.s3.amazonaws.com/manual/pk43051316_0.mp4.jpg"/>

<div style={{
    position: 'relative',
    zIndex: "1",
    top: "-52%",
    left: "42%",
}} >
<FaPlay style={{
color: "grey",
fontSize: "30px"
}} />
</div>

        </div>
        <div style={{
        width:"16%",
        height: "200px",
        margin:"auto",
        // border: "1px solid black",
       }}>
          <img style={{
        width:"100%",
        height: "100%",
       }} src="https://m.photoslurp.com/vt720/pslurpmedia.s3.amazonaws.com/manual/pk43050813_0.mp4.jpg"/>

<div style={{
    position: 'relative',
    zIndex: "1",
    top: "-52%",
    left: "42%",
}} >
<FaPlay style={{
color: "grey",
fontSize: "30px"
}} />
</div>

        </div>
        
        <div style={{
        width:"16%",
        height: "200px",
        margin:"auto",
        // border: "1px solid black",
       }}>
          <img style={{
        width:"100%",
        height: "100%",
       }} src="https://m.photoslurp.com/vt720/pslurpmedia.s3.amazonaws.com/manual/pk43050878_0.mp4.jpg"/>

<div style={{
    position: 'relative',
    zIndex: "1",
    top: "-52%",
    left: "42%",
}} >
<FaPlay style={{
color: "grey",
fontSize: "30px"
}} />
</div>

        </div>

        <div style={{
        width:"16%",
        height: "200px",
        margin:"auto",
        // border: "1px solid black",
       }}>
          <img style={{
        width:"100%",
        height: "100%",
       }} src="https://m.photoslurp.com/vt720/pslurpmedia.s3.amazonaws.com/instagram-business/17992591795626019_0.mp4.jpg"/>

<div style={{
    position: 'relative',
    zIndex: "1",
    top: "-52%",
    left: "42%",
}} >
<FaPlay style={{
color: "grey",
fontSize: "30px"
}} />
</div>

        </div>


        <div style={{
        width:"16%",
        height: "200px",
        margin:"auto",
        // border: "1px solid black",
       }}>
          <img style={{
        width:"100%",
        height: "100%",
       }} src="https://m.photoslurp.com/vt720/pslurpmedia.s3.amazonaws.com/instagram-business/17996738842596667_0.mp4.jpg"/>

<div style={{
    position: 'relative',
    zIndex: "1",
    top: "-52%",
    left: "42%",
}} >
<FaPlay style={{
color: "grey",
fontSize: "30px"
}} />
</div>

        </div>

        <div style={{
        width:"16%",
        height: "200px",
        margin:"auto",
        // border: "1px solid black",
       }}>
          <img style={{
        width:"100%",
        height: "100%",
       }} src="https://m.photoslurp.com/vt720/pslurpmedia.s3.amazonaws.com/instagram-business/18194911645235307_0.mp4.jpg"/>

<div style={{
    position: 'relative',
    zIndex: "1",
    top: "-52%",
    left: "42%",
}} >
<FaPlay style={{
color: "grey",
fontSize: "30px"
}} />
</div>

        </div>
        
        

       </div>
       <br />
       <br/>
       <img style={{width: "80%",
      margin: "auto"}} src="https://files.myglamm.com/site-images/original/refer2240x614.jpg" />
        <br />
       <br/>
       <img style={{width: "100%"}} src="https://files.myglamm.com/site-images/original/3360x279_6.jpg" />
       <br />
       <br/>
       <img style={{width: "100%"}} src="https://files.myglamm.com/site-images/original/Row-44-Beware-Strip-3360x220.png" />
       <br />
       <br/>
       <img style={{width: "80%", margin: "auto"}} src="https://files.myglamm.com/site-images/original/Row-43-Disclaimer-Strip-3360x220.png" />
       <br/>
       </div>

     
     <div>
    <a href='https://www.myglamm.com/images/TellMyGlammWhatYouWant.webm'>
    <video width="100%" 
      //  controls
      position="relative"
       muted
       autoPlay={"autoplay"}
       preLoad="auto"
       loop
       
        >
  <source src="https://www.myglamm.com/images/TellMyGlammWhatYouWant.webm" type="video/mp4"/>

</video>
    </a>
  
    
     </div>
       
    
      
         </>
    )
}

export default Home;