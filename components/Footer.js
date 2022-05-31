import React from 'react'

import {
	Flex,
	Stack,
	Heading
} from '@chakra-ui/react'

const Footer = () => {
	return (
		<Flex backgroundColor="white" justifyContent="center" align="center">
			<Heading size="sm" fontWeight={400} color="gray" p={6}> Built by Jake Torres &#169; 2022</Heading>
		</Flex>
	)
}

export default Footer
