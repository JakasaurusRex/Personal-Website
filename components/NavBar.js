import AnchorLink from 'react-anchor-link-smooth-scroll'
import React from 'react'
import {EmailIcon} from '@chakra-ui/icons'

import {
	Flex,
	Box,
	Button,
	Heading,
	Spacer,
	Image
} from '@chakra-ui/react'

const NavBar = () => {
	return (
			<Flex minWidth='full' alignItems='center' justify='flex-end' py={8} mt={0} mb={0,0,0} px={[2,8,8]} mx="auto">
				<Box py='2' px='4'> <Image fit="cover" borderRadius='full' boxSize='10em' src="/Nicer.jpeg" /> </Box>
				<Box py='2' px='4'><Heading size='lg'> Jake Torres </Heading><Heading size='sm' color='gray'>Programmer and Computer Scientist</Heading></Box>
				<Spacer />
				<Box py='2' px ='4'>
					<AnchorLink href='#about'> <Heading size='md'>About </Heading></AnchorLink>
				</Box>
				<Box py='2' px='4'>
					<AnchorLink href='#experience'> <Heading size='md'>Experience </Heading></AnchorLink>
				</Box>
				<Box py='2' px='4'>
					<AnchorLink href='#projects'> <Heading size='md'>Projects </Heading></AnchorLink>
				</Box>
				<Box py='2' px='4'>
					<AnchorLink href='#contact'> <Heading size='md'>Contact </Heading></AnchorLink>
				</Box>
				<Button leftIcon={<EmailIcon />} variant='solid' colorScheme='orange'>
					<a href='/Resume.pdf'> <Heading size='md'> Resume  </Heading></a>
				</Button>
			</Flex>
	)
}

export default NavBar
