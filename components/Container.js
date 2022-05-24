import React from 'react'
import {
	useColorMode,
	Flex,
	Box,
	Button,
	Stack
} from '@chakra-ui/react'

import NextLink from 'next/link'
import styled from '@emotion/styled'
import EmailIcon from '@chakra-ui/icons'

const Container = ({children}) => {
	const NavBar = styled(Flex)`
		z-index = 10;
		top: 2em;
		align: right;
	`

	return (
		<>
			<NavBar
			
			>
				<Stack direction='row' spacing={2} align='center'>
					<Button variant='ghost'> About Me </Button>
					<Button variant='ghost'> Experience </Button>
					<Button variant='ghost'> Projects </Button>
					<Button variant='ghost'> Updates </Button>
					<NextLink href="/" passHref>
						<Button as="a" colorScheme='orange' variant='solid'> Contact Me </Button>
					</NextLink>
				</Stack>
			</NavBar>
		</>	
	)
}

export default Container
