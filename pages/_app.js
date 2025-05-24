//This is needed for chakra ui and react, overrides the theme for Chakra to add my own font sizes and weights
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import {Analytics} from '@vercel/analytics/react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import * as gtag from '../lib/gtag'
import Head from 'next/head'

function MyApp({Component, pageProps}) {
	const router = useRouter()

	useEffect(() => {
	  // Handle loading screen
	  if (typeof window !== 'undefined') {
		const loader = document.getElementById('globalLoader');
		if (loader)
		  loader.style.display = 'none';
	  }
  
	  // Handle Google Analytics page views
	  const handleRouteChange = (url) => {
		gtag.pageview(url)
	  }
  
	  // Subscribe to route changes
	  router.events.on('routeChangeComplete', handleRouteChange)
  
	  // Cleanup subscription
	  return () => {
		router.events.off('routeChangeComplete', handleRouteChange)
	  }
	}, [router.events])

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
