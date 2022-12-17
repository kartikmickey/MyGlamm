import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Stack ,
    InputLeftAddon,
    InputGroup,
    ModalFooter,
    ModalBody,
    Input,
    Text,
    Button,
    useDisclosure,
    Box,
    Center,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function Sign() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button
        display={{ base: 'inline-flex', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'pink.400'}
        href={'#'}
        _hover={{
          bg: 'pink.300',
        }}
        onClick={onOpen}> Sign In</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody mb={"20px"} >
              <p style={{
                color: '#333333',
                fontSize: "14px",
                lineHeight: "22px",
                fontWeight: "500",
                textAlign: "center",
                marginTop: "20px"
              }} >
                Get 15% Good Points back on every order
              </p>
              <img style={{
                margin: "auto",
                textAlign: "center",
                width: "55%",
                marginTop: "30px"
              }}  src='https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg' />

<p style={{
                color: '#000000',
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
                textAlign: "left",
                marginTop: "20px",
                marginLeft: "30px",
                marginBottom: "10px"
              }} >
               *Mobile Number
                   </p>
                   <hr></hr>
                   <Stack mt={"35px"} spacing={4}>
  <InputGroup>
    <InputLeftAddon children='+91' />
    <p style={{
        marginLeft:'10px'
    }} >   </p>
    <Input type='tel' placeholder='phone number' />
  </InputGroup>
</Stack>
<Button colorScheme='blackAlpha' bg={'black'} color={"white"} mt={"23px"} w='100%' onClick={onClose} >
    SIGN IN
  </Button>
  <p style={{
    display: 'flex',
    
    marginTop: "40px",
   
  }}>
    <hr style={{width: "35%"}}></hr>
    <p style={{textAlign: 'center',
color: '#000000',
fontSize: "12px",
lineHeight: "13.2px",
fontWeight: "400",
width: "30%",
marginTop: "-2%"
}} >or continue with</p>
    <hr style={{width: "35%"}} ></hr>
  </p>
  <Button w={'60%'} colorScheme={'facebook'} ml={"20%"} mt={"20px"} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'60%'} variant={'outline'}  ml={"20%"} mt={"20px"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
<p style={{width: "70%",
margin: "auto",
color: "#333333",
fontSize: "12px",
lineHeight: "18px",
fontWeight: "400",
marginTop: "20px",
}}>
By Signing up you agree to our  <b>Terms & Conditions</b>
</p>
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Sign


//   <ModalFooter>
//   <Button colorScheme='blue' mr={3} onClick={onClose}>
//     Close
//   </Button>
//   <Button variant='ghost'>Secondary Action</Button>
// </ModalFooter>