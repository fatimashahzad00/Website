import React from 'react'
import { Box, Button, Container, Flex, SimpleGrid, Menu, MenuButton, MenuList, MenuItem, IconButton, Image, color, background } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
// import Image from 'next/image'
import logo from 'public/logo1.png'
import Link from 'next/link'

export default function Header() {
  return (
    <Box boxShadow={'xl'} bgGradient='linear-gradient(to right, #005d4f, #006153, #006558, #006a5c, #006e61, #007366, #01786a, #017d6f, #028376, #028a7c, #039083, #03978a)'>
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
          <Box>
            <Image src='/logo1.png' alt='panaverse dao logo' height='60px' my='5px' ></Image>
          </Box>
          <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10} textColor='white'>
            <Link href=''color='black'>Home</Link>
            <Link href=''>Courses</Link>
            <Link href=''>About </Link>
            <Link href=''>Contact</Link>
          </Flex>
          <Box display={{ lg: 'initial', base: 'none' }}>
            <Button mt='15px' size={'md'} bg='gray.700'
               float={'right'} color='white'>Apply</Button>
          </Box>
          <Box py='15px' display={{ lg: 'none', base: 'initial' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                float='right'
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList >
                <MenuItem >
                  Home
                </MenuItem>
                <MenuItem >
                  Courses
                </MenuItem>
                <MenuItem >
                  About
                </MenuItem>
                <MenuItem>
                  Contact
                </MenuItem>
                <MenuItem>
                  Apply
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
