//This is needed for chakra ui and react, overrides the theme for Chakra to add my own font sizes and weights
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'

import Head from 'next/head'

function MyApp({Component, pageProps}) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<Head>
				<title> Jake's Personal Website </title>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
			</Head>
			<Component {...pageProps}/>
		</ChakraProvider>
	)
}

export default MyApp
