import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props) => {
    return (
        
     <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="" />
      
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('#f4f4f4', '#f4f4f4')}
        color={useColorModeValue('yellow.700', 'yellow.200')}>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid columns={{ base: 2, sm: 5, md: 10 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>LIPS</ListHeader>
              <Link href={'#'}>Lipstick</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Crayon Lipstick</Link>
              </Stack>
              <Link href={'#'}>Matte Lipstick</Link>
              <Link href={'#'}>Hi-Shine Lipstick</Link>
              <Link href={'#'}>Liquid Lipstick</Link>
              <Link href={'#'}>Lip Gloss</Link>
              <Link href={'#'}>Lip Liner</Link>
              <Link href={'#'}>Glitter</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>FACE</ListHeader>
              <Link href={'#'}>Face Sets</Link>
              <Link href={'#'}>Fixing Powder</Link>
              <Link href={'#'}>Primer</Link>
              <Link href={'#'}>Concealer</Link>
              <Link href={'#'}>Foundation</Link>
              <Link href={'#'}>Compact</Link>
              <Link href={'#'}>Makeup Accessories</Link>
              <Link href={'#'}>Makeup Brushes</Link>
              <Link href={'#'}>Setting Powder</Link>
              <Link href={'#'}>Cheek Stain</Link>
              <Link href={'#'}>Sindoor</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>EYES</ListHeader>
              <Link href={'#'}>Eye Shadow</Link>
              <Link href={'#'}>Eyeliner</Link>
              <Link href={'#'}>Glitter</Link>
              <Link href={'#'}>Eyebrows</Link>
              <Link href={'#'}>Mascara</Link>
              <Link href={'#'}>Kajal</Link>
              <Link href={'#'}>Eyeshadow Brushes</Link>
              <Link href={'#'}>Eye Combos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>SKINCARE</ListHeader>
              <Link href={'#'}>Bronzer</Link>
              <Link href={'#'}>Blush</Link>
              <Link href={'#'}>Highlighter</Link>
              <Link href={'#'}>Banana Powder</Link>
              <Link href={'#'}>Sunscreen</Link>
              <Link href={'#'}>Serum</Link>
              <Link href={'#'}>Body lotion</Link>
              <Link href={'#'}>Moisturiser</Link>
              <Link href={'#'}>Night Cream</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>NAILS</ListHeader>
              <Link href={'#'}>Nail Lacquer</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Matte Nail Polish</Link>
               
              </Stack>
              <Link href={'#'}>Nail Polish</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>BATH & BODY</ListHeader>
              <Link href={'#'}>Shower Gels</Link>
              <Link href={'#'}>Soaps</Link>
              <Link href={'#'}>Body Lotion</Link>
              <Link href={'#'}>Body Spray & Mists</Link>
              <Link href={'#'}>Hand Wash</Link>
              <Link href={'#'}>Foot Cream</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>SANITIZING CARE</ListHeader>
              <Link href={'#'}>Sanitizing Wipes</Link>
              <Link href={'#'}>Sanitizing Kits</Link>
              <Link href={'#'}>Sanitizing Spray</Link>
              <Link href={'#'}>Hand Sanitizer</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>KITS AND COMBOS</ListHeader>
              <Link href={'#'}>Makeup Kits</Link>
              <Link href={'#'}>Bridal Makeup Kits</Link>
              <Link href={'#'}>Makeup Combo</Link>
              <Link href={'#'}>Makeup Gift Sets</Link>
              <Link href={'#'}>Cosmetics Kits & Combos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>HAIR CARE</ListHeader>
              <Link href={'#'}>Shampoo</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Serum</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('pink.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Hair Oil</Link>
              <Link href={'#'}>Conditioner</Link>
              <Link href={'#'}>Hair Mask</Link>
              <Link href={'#'}>Combos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>KNOW MORE</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Refer & Earn</Link>
              <Link href={'#'}>Exclusive Offers</Link>
              <Link href={'#'}>Store Locator</Link>
              <Link href={'#'}>Sitemap</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 My Glamm. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }