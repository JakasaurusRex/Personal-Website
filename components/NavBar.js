import AnchorLink from 'react-anchor-link-smooth-scroll'
import React from 'react'
import {EmailIcon} from '@chakra-ui/icons'

import {
     Flex,
     Box,
     Button,
	 Heading
} from '@chakra-ui/react'

const NavBar = () => {
	return (
			<Flex minWidth='max-content' alignItems='center' justify='flex-end' py={2} mt={4} mb={[0,0,8]} px={[2,8,8]} mx="auto">
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
					<a className='bg-orange text-white rounded-lg ' href=''> <Heading size='md'> Resume  </Heading></a>
				</Button>
			</Flex>
	)
}

export default NavBar
