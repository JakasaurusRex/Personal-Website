import Head from 'next/Head'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
	return (
		<Box as="main" pb={8}>
		  <Head>
			<meta name ="viewport" content = "width=device-width, initial-scale=1" />
			<title> Jake Torres | Personal Website </title>
		  </Head>

		</Box>
	)
}

export default  Main
