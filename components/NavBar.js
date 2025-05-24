//Importing things that I will use
//Anchor link is what allows the scrolling between different parts of the page, look it up "react anchor link smooth scroll" for more info
import AnchorLink from 'react-anchor-link-smooth-scroll'
import React from 'react'
import {EmailIcon} from '@chakra-ui/icons'

import {
	Flex,
	Box,
	Button,
	Heading,
	Spacer,
	Image,
	Stack,
	Link,
} from '@chakra-ui/react'

const NavLink = ({ href, children }) => (
	<AnchorLink href={href}>
		<Heading 
			size='md' 
			_hover={{ color: 'orange.500' }}
			transition="color 0.2s"
		>
			{children}
		</Heading>
	</AnchorLink>
)

//Creating NavBar function
const NavBar = () => {
	return (
		<Box>
			<Flex
				w="100%"
				px={{ base: 4, md: 8 }}
				py={4}
				align="center"
				bg="white"
				shadow="sm"
			>
				{/* Logo and Name - Always visible */}
				<Stack direction={{ base: "column", md: "row" }} align="center" spacing={{ base: 2, md: 4 }}>
					<Image 
						fit="cover" 
						borderRadius='full' 
						boxSize={{ base: '80px', md: '100px' }} 
						src="/NewPFP.png" 
						alt="Jake Torres"
					/>
					<Box textAlign={{ base: "center", md: "left" }}>
						<Heading size='lg'>Jake Torres</Heading>
						<Heading size='sm' color='gray'>Creative Engineer and Programmer @ Figma</Heading>
					</Box>
				</Stack>

				<Spacer />

				{/* Desktop Navigation */}
				<Stack 
					direction="row" 
					spacing={6} 
					align="center"
					display={{ base: 'none', md: 'flex' }}
				>
					<NavLink href='#about'>About</NavLink>
					<NavLink href='#experience'>Experience</NavLink>
					<NavLink href='#projects'>Projects</NavLink>
					<NavLink href='#contact'>Contact</NavLink>
					<Button 
						leftIcon={<EmailIcon />} 
						variant='solid' 
						colorScheme='orange'
						size="md"
					>
						<Link href='/Resume.pdf' _hover={{ textDecoration: 'none' }}>Resume</Link>
					</Button>
				</Stack>

				{/* Mobile Resume Button */}
				<Button 
					leftIcon={<EmailIcon />} 
					variant='solid' 
					colorScheme='orange'
					size="sm"
					ml={4}
					display={{ base: 'flex', md: 'none' }}
				>
					<Link href='/Resume.pdf' _hover={{ textDecoration: 'none' }}>Resume</Link>
				</Button>
			</Flex>
		</Box>
	)
}

//Exporting NavBar
export default NavBar
