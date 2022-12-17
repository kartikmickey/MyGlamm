import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    InputGroup,
    PopoverTrigger,
    PopoverContent,
    InputLeftElement,
    useColorModeValue,
    useBreakpointValue,
    Input,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    Search2Icon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import Sign from '../Pages/sign';
  

  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box  >
        <Flex
         pos="fixed"
         zIndex={2}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          w={'full'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} direction="column" ml={10} >
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              ml={12}
              width={{ base: "auto", md: '150px' }}
              
              color={useColorModeValue('gray.800', 'white')}>
                   
                <Flex height={50} width={ { base: "auto", md: 1000}}  >
                <img src='https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg'  />
                <InputGroup>
    <InputLeftElement position={"absolute"}
    left={10} mt={2}
  display={{ base: 'none', md: 'flex' }} 
      children={<Search2Icon color='gray.300' />}
    />

<Input mt={2} display={{ base: 'none', md: 'flex' }} placeholder='Find Lipstick, Eyeliner, Makeup Tutorial, etc' ml={"40px"} width={600}   />
              s

     </InputGroup>
               </Flex>
               
            </Text>
  
            <Flex  display={{ base: 'none', md: 'flex' }} ml={10} mt={2}  >
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
          //  pos="fixed"
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button> */}
            {/* <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}
            <Sign/>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen}  animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack  direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} >
            <Popover trigger={'hover'} placement={'bottom-start'} >
              <PopoverTrigger >
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        // pos="fixed"
        display={{ md: 'none' }}>
           <Box h={{ base: '60px', md: '98px' }}></Box>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  

  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4}  onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

 
  
  const NAV_ITEMS= [

    {
        label: 'HOME',
        href: '/',
      },
    {
        label: 'MAKEUP',
        href: '/makeup',
        children: [
          {
            label: 'Lips',
            subLabel: 'Lipstick',
            href: '#',
          },
          {
            label: 'Face',
            subLabel: 'Fixing Powder',
            href: '#',
          },
          {
            label: 'Eyes',
            subLabel: 'Eye Shadow',
            href: '#',
          },
          {
            label: 'Nails',
            subLabel: 'Nail Polish',
            href: '#',
          },
          {
            label: 'Kits And Combos',
            subLabel: 'Makeup Kits',
            href: '#',
          },
          {
            label: 'Makeup Accessories',
            subLabel: 'Makeup Burshes',
            href: '#',
          },
        ],
      },
      {
        label: 'HAIR CARE',
        children: [
          {
            label: 'Hair Care',
            subLabel: 'Shampoo',
            href: '#',
          },
          {
            label: 'Hair Oil',
            subLabel: 'Onion',
            href: '#',
          },
          {
            label: 'Serum',
            subLabel: 'Hairfall Control',
            href: '#',
          },
          
        ],
      },
      {
        label: 'SKIN CARE',
        children: [
          {
            label: 'Cleansing Product',
            subLabel: 'Face Wash',
            href: '#',
          },
          {
            label: 'Mask',
            subLabel: 'Sheet Mask',
            href: '#',
          },
          {
            label: 'Moisturizer',
            subLabel: 'Sunscreen Moisturizer',
            href: '#',
          },
          
        ],

      },
      {
        label: 'SANITIZING CARE',
        children: [
          {
            label: 'Sanitizing Care',
            subLabel: 'Hand Sanitizer',
            href: '#',
          },
        ],
      },
      {
        label: 'COLLECTION',
        children: [
          {
            label: 'Shop By Collection',
            subLabel: 'MyGlamm',
            href: '#',
          },
        ],
      },
      {
        label: 'REWARDS',
        href: '#',
      },
      {
        label: 'MYGLAMM STUDIO',
        children: [
          {
            label: 'Studio',
            subLabel: 'Blogs',
            href: '#',
          },
        ],
      },
      {
        label: 'OFFERS',
        href: '#',
      },
  ];