//This is needed for chakra ui and react, overrides the theme for Chakra to add my own font sizes and weights
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import {Analytics} from '@vercel/analytics/react';
import Head from 'next/head'
import { useEffect } from 'react';

function MyApp({Component, pageProps}) {
	useEffect(() => {
		// This ensures the app is fully mounted before any client-side rendering
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('globalLoader');
			if (loader)
				loader.style.display = 'none';
		}
	}, []);

	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Jake's Personal Website</title>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
			</Head>
			<Component {...pageProps}/>
			<Analytics />
		</ChakraProvider>
	)
}

export default MyApp
