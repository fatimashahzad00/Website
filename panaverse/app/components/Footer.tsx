import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, SearchIcon } from '@chakra-ui/icons'
import logo from 'public/logo1.png'
// import Image from 'next/image';

const Logo = (props: any) => {
  return (
    <Box >
      <Image src={'/logo1.png'} alt='panaverse' display={{base:'center'}} height='100px' pl='15px'></Image>
      <Text></Text>
    </Box>);
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.900')}
      color={useColorModeValue('gray.100', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo/>
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Useful links</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Courses</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Apply</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>LinkedIn</Link>
            <Link href={'#'}>Youtube</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Github</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}> <PhoneIcon/>  +92 856 3834764</Link>
            <Link href={'#'}><EmailIcon /> abc@gmail.com</Link>
            <Link href={'#'}><SearchIcon /> Karachi, Pakistan</Link>
            
          </Stack>
         
        </SimpleGrid>
          
      </Container>
      <Box bg='gray.900' color='white' textAlign={'center'} py='10px'>
            <Text fontSize={'sm'}> © 2022 Fatima Shahzad. All rights reserved</Text>
          </Box>
    </Box>
  );
}