import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useNavigate } from "react-router-dom";

function Modalbutton(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    let navigate = useNavigate();
    return(
        <>
        <Button variant='solid' colorScheme='pink' onClick={onOpen}>Confirm</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Congratulations!</ModalHeader>
          
          <ModalBody>
            Order Placed Successfully.
            
            ThankYou For Shopping!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={() => navigate(`/makeup`)}>
                
             Continue Shopping
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}

export default Modalbutton